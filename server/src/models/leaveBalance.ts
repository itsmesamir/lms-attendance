import { Knex } from 'knex';
import knex from '../db';

interface LeaveBalance {
  id: number;
  employeeId: string;
  leaveTypeId: number;
  entitlement: number;
  remainingDays: number;
  expiresOn: string | null;
  reason: string | null;
  countryId: number | null;
  fiscalYearId: number | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  createdBy: number | null;
  deletedBy: number | null;
  updatedBy: number | null;
}

class LeaveBalanceModel {
  static query() {
    return knex<LeaveBalance>('leave_balances');
  }

  // create leave balance for the employee in a transaction
  static createLeaveBalance(
    leaveBalanceData: LeaveBalance,
    trx?: Knex.Transaction
  ) {
    return this.query().insert(leaveBalanceData).transacting(trx!);
  }

  static getLeaveBalance(
    {
      employeeId,
      leaveTypeId,
      fiscalYearId
    }: {
      employeeId: number;
      leaveTypeId: number;
      fiscalYearId: number;
    },
    trx?: Knex.Transaction
  ) {
    const query = this.query()
      .where('employee_id', employeeId)
      .andWhere('leave_type_id', leaveTypeId)
      .andWhere('fiscal_year_id', fiscalYearId)
      .first();

    if (trx) {
      query.transacting(trx);
    }

    return query;
  }

  // update the leave balance, where the user takes some leave the remaining days will be updated
  static updateLeaveBalance(
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
  ) {
    return this.query()
      .where('employee_id', employeeId)
      .andWhere('leave_type_id', leaveTypeId)
      .andWhere('fiscal_year_id', fiscalYearId)
      .decrement('remaining_days', leaveDays)
      .update('updated_at', new Date())
      .transacting(trx!);
  }
}

export default LeaveBalanceModel;
export type { LeaveBalance };
