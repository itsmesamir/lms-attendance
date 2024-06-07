import { Knex } from 'knex';
import knex from '../db';

class LeaveRequestStatus {
  static getByRequestId(requestId: number, trx?: Knex.Transaction) {
    return knex('LeaveRequestStatus')
      .where('Leave_request_id', requestId)
      .transacting(trx!)
      .first();
  }

  static create(
    requestId: number,
    status: string,
    reason: string,
    trx?: Knex.Transaction
  ) {
    return knex('LeaveRequestStatus')
      .insert({
        Leave_request_id: requestId,
        status,
        reason
      })
      .transacting(trx!);
  }

  static update(
    requestId: number,
    status: string,
    reason: string,
    trx?: Knex.Transaction
  ) {
    return knex('LeaveRequestStatus')
      .where('Leave_request_id', requestId)
      .update({ status, reason })
      .transacting(trx!);
  }

  static delete(requestId: number, trx?: Knex.Transaction) {
    return knex('LeaveRequestStatus')
      .where('Leave_request_id', requestId)
      .del();
  }
}

export default LeaveRequestStatus;
