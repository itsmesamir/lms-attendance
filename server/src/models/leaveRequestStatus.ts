import { Knex } from 'knex';
import knex from '../db';

class LeaveRequestStatus {
  static getByRequestId(requestId: number, trx?: Knex.Transaction) {
    return knex('leave_request_status')
      .where('leave_request_id', requestId)
      .transacting(trx!)
      .first();
  }

  static create(requestBody: any, trx?: Knex.Transaction) {
    return knex('leave_request_status').insert(requestBody).transacting(trx!);
  }

  static update(requestId: number, data: any, trx?: Knex.Transaction) {
    return knex('leave_request_status')
      .where('leave_request_id', requestId)
      .update(data)
      .transacting(trx!);
  }

  static delete(requestId: number, trx?: Knex.Transaction) {
    return knex('LeaveRequestStatus')
      .where('Leave_request_id', requestId)
      .del();
  }
}

export default LeaveRequestStatus;
