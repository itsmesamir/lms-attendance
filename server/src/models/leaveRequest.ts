import { LeaveRequest } from '../interfaces/leaveRequest';
import knex from '../db';

class LeaveRequestModel {
  static query() {
    return knex<LeaveRequest>('leave_requests');
  }

  static create(leaveRequest: Partial<LeaveRequest>) {
    return this.query().insert(leaveRequest).returning('*');
  }

  static getAll() {
    return this.query();
  }

  static getAllByEmployeeId(employeeId: number) {
    return this.query().where('employee_id', employeeId);
  }

  static getById(id: number) {
    return this.query().where('id', id).first();
  }

  static update(id: number, leaveRequest: Partial<LeaveRequest>) {
    return this.query().where('id', id).update(leaveRequest);
  }

  static delete(id: number) {
    return this.query().where('id', id).del();
  }

  static checkLeaveExists(
    employeeId: number,
    startDate: string,
    endDate: string
  ) {
    return this.query()
      .where('employee_id', employeeId)
      .andWhere('start_date', '<=', endDate)
      .andWhere('end_date', '>=', startDate)
      .first();
  }
}

export default LeaveRequestModel;
export type { LeaveRequest };
