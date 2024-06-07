import { withNameSpace } from '../utils/logger';
import LeaveRequest from '../models/leaveRequest';
import LeaveRequestStatusService from './leaveRequestStatus';
import { LeaveRequest as LeaveRequestType } from '../interfaces/leaveRequest';
import LeaveBalanceModel, { LeaveBalance } from '../models/leaveBalance';
import FiscalYearService from './fiscalYear';
import knex from '../db';

import * as moment from 'moment';
import { fetchEmployeeById } from './employee';
import { getFromStore } from '../asyncStore';
import { Knex } from 'knex';
import { updateLeaveBalance } from './leaveBalance';

const logger = withNameSpace('services/leaveRequest');

class LeaveRequestService {
  // static async createLeaveRequests(leaveRequest: any) {
  //   logger.info(
  //     `Creating leave request for employee with id: ${leaveRequest.employee_id}`
  //   );
  //   try {
  //     const createdLeaveRequest = await LeaveRequest.create(leaveRequest);
  //     logger.info(
  //       `Leave request for employee with id: ${leaveRequest.employee_id} created successfully`
  //     );
  //     return createdLeaveRequest;
  //   } catch (error) {
  //     logger.error(
  //       `Error creating leave request for employee with id: ${leaveRequest.employee_id}`
  //     );
  //     throw error;
  //   }
  // }

  static async getLeaveRequests() {
    logger.info('Fetching all leave requests');
    try {
      const leaveRequests = await LeaveRequest.getAll();
      logger.info('Leave requests fetched successfully');
      return leaveRequests;
    } catch (error) {
      logger.error('Error fetching leave requests');
      throw error;
    }
  }

  static async getLeaveRequestsByEmployeeId(employeeId: number) {
    logger.info(`Fetching leave requests for employee with id: ${employeeId}`);

    try {
      const leaveRequests = await LeaveRequest.getAllByEmployeeId(employeeId);
      logger.info(
        `Leave requests for employee with id: ${employeeId} fetched successfully`
      );
      return leaveRequests;
    } catch (error) {
      logger.error(
        `Error fetching leave requests for employee with id: ${employeeId}`
      );
      throw error;
    }
  }

  static async getLeaveRequestById(id: number) {
    logger.info(`Fetching leave request with id: ${id}`);
    try {
      const leaveRequest = await LeaveRequest.getById(id);
      logger.info(`Leave request with id: ${id} fetched successfully`);
      return leaveRequest;
    } catch (error) {
      logger.error(`Error fetching leave request with id: ${id}`);
      throw error;
    }
  }

  static async updateLeaveRequest(id: number, leaveRequest: any) {
    logger.info(`Updating leave request with id: ${id}`);

    try {
      const updatedLeaveRequest = await LeaveRequest.update(id, leaveRequest);
      logger.info(`Leave request with id: ${id} updated successfully`);
      return updatedLeaveRequest;
    } catch (error) {
      logger.error(`Error updating leave request with id: ${id}`);
      throw error;
    }
  }

  static async deleteLeaveRequest(id: number) {
    logger.info(`Deleting leave request with id: ${id}`);
    try {
      const deletedLeaveRequest = await LeaveRequest.delete(id);
      logger.info(`Leave request with id: ${id} deleted successfully`);
      return deletedLeaveRequest;
    } catch (error) {
      logger.error(`Error deleting leave request with id: ${id}`);
      throw error;
    }
  }

  static async createLeaveRequest(leaveRequest: LeaveRequestType) {
    const currentUser = getFromStore<{ id: number }>('user');

    logger.info(
      `Applying leave for employee with id: ${leaveRequest.employeeId}`
    );
    const { employeeId, startDate, endDate, leaveTypeId } = leaveRequest;

    // start date should be before end date
    if (moment(startDate).isAfter(endDate)) {
      logger.error('Start date should be before end date');

      throw new Error('Start date should be before end date');
    }

    const employee = await fetchEmployeeById(employeeId);

    if (!employee) {
      logger.error('Employee not found');
      throw new Error('Employee not found');
    }

    const { country: userCountry, manager } = employee;

    const { id: currentFiscalYearId } =
      await FiscalYearService.getFiscalYearByCountry(userCountry.name);

    if (!currentFiscalYearId) {
      logger.error('Fiscal year not found');
      throw new Error('Fiscal year not found');
    }

    // Check leave balance
    const leaveBalance = await this.getLeaveBalance(
      +employeeId,
      leaveTypeId,
      currentFiscalYearId
    );
    const leaveDays = this.calculateLeaveDays(startDate, endDate);

    if (
      leaveBalance.remainingDays < leaveDays ||
      leaveBalance.remainingDays === 0
    ) {
      logger.error('Insufficient leave balance');
      throw new Error('Insufficient leave balance');
    }

    // Check if leave for the days already exists
    if (await this.checkLeaveExists(+employeeId, startDate, endDate)) {
      throw new Error('Leave for the specified dates already exists');
    }
    // need to update the leave balance as well after creating the leave request.
    // also need to populate the data in leave_request_status table.
    // doing all this in a single transaction.

    // starting the transaction
    const newLeaveRequest = await knex.transaction(async (trx) => {
      // Post the leave request
      logger.info('Creating leave request');
      const [newLeaveRequestId] = await LeaveRequest.create({
        ...leaveRequest,
        managerId: manager.id,
        status: 'Requested',
        createdBy: currentUser?.id,
        leaveDays
      }).transacting(trx);

      logger.info('Leave request created successfully');
      logger.info('Updating leave balance');

      await updateLeaveBalance(
        {
          employeeId: +employeeId,
          leaveTypeId,
          fiscalYearId: currentFiscalYearId,
          leaveDays
        },
        trx
      );
      logger.info('Leave balance updated successfully');

      logger.info('Creating leave request status');
      // Post the leave request status
      await LeaveRequestStatusService.updateLeaveRequestStatus(
        {
          leaveRequestId: newLeaveRequest.id,
          status: 'Requested',
          createdBy: currentUser?.id
        },
        trx
      );

      logger.info('Leave request status created successfully');

      return newLeaveRequestId;
    });

    logger.info(
      `Leave applied for employee with id: ${leaveRequest.employeeId}`
    );

    return newLeaveRequest;
  }

  static async getLeaveBalance(
    employeeId: number,
    leaveTypeId: number,
    fiscalYearId: number,
    trx?: Knex.Transaction
  ): Promise<LeaveBalance> {
    const leaveBalance = await LeaveBalanceModel.getLeaveBalance(
      { employeeId, leaveTypeId, fiscalYearId },
      trx
    );

    if (!leaveBalance) {
      throw new Error('Leave balance not found');
    }

    return leaveBalance;
  }

  static calculateLeaveDays(startDate: string, endDate: string): number {
    logger.info('Calculating leave days', { startDate, endDate });
    let current = moment(startDate);
    const end = moment(endDate);
    let leaveDays = 0;
    while (current <= end) {
      if (current.day() !== 0 && current.day() !== 6) {
        leaveDays++;
      }
      current = current.add(1, 'days');
    }
    return leaveDays;
  }

  static async checkLeaveExists(
    employeeId: number,
    startDate: string,
    endDate: string
  ): Promise<boolean> {
    const existingLeave = await LeaveRequest.checkLeaveExists(
      employeeId,
      startDate,
      endDate
    );
    return !!existingLeave;
  }
}

export default LeaveRequestService;
