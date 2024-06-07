import { withNameSpace } from '../utils/logger';
import LeaveBalanceModel, { LeaveBalance } from '../models/leaveBalance';
import { Knex } from 'knex';

const logger = withNameSpace('services/leaveBalance');

export const createLeaveBalance = async (
  leaveBalanceData: LeaveBalance
): Promise<any> => {
  logger.info(
    `Creating leave balance for employee with id: ${leaveBalanceData.employeeId}`
  );
  try {
    const createdLeaveBalance =
      await LeaveBalanceModel.createLeaveBalance(leaveBalanceData);
    logger.info(
      `Leave balance for employee with id: ${leaveBalanceData.employeeId} created successfully`
    );
    return createdLeaveBalance;
  } catch (error) {
    logger.error(
      `Error creating leave balance for employee with id: ${leaveBalanceData.employeeId}`
    );
    throw error;
  }
};

export const getLeaveBalanceByEmployeeId = async (
  {
    employeeId,
    leaveTypeId,
    fiscalYearId
  }: { employeeId: number; leaveTypeId: number; fiscalYearId: number },
  trx?: Knex.Transaction
): Promise<any> => {
  logger.info(`Fetching leave balance for employee with id: ${employeeId}`);
  try {
    const leaveBalance = await LeaveBalanceModel.getLeaveBalance(
      { employeeId, leaveTypeId, fiscalYearId },
      trx
    );
    logger.info(
      `Leave balance for employee with id: ${employeeId} fetched successfully`
    );

    return leaveBalance;
  } catch (error) {
    logger.error(
      `Error fetching leave balance for employee with id: ${employeeId}`
    );
    throw error;
  }
};

export const updateLeaveBalance = async (
  {
    employeeId,
    leaveTypeId,
    fiscalYearId,
    leaveDays
  }: {
    employeeId: number;
    leaveTypeId: number;
    fiscalYearId: number;
    leaveDays: number;
  },
  trx?: Knex.Transaction
): Promise<void> => {
  logger.info(
    `Updating leave balance for employee with id: ${employeeId} for leave type with id: ${leaveTypeId}`
  );
  try {
    await LeaveBalanceModel.updateLeaveBalance(
      { employeeId, leaveTypeId, fiscalYearId, leaveDays },
      trx
    );
    logger.info(
      `Leave balance for employee with id: ${employeeId} updated successfully`
    );
  } catch (error) {
    logger.error(
      `Error updating leave balance for employee with id: ${employeeId}`
    );
    throw error;
  }
};
