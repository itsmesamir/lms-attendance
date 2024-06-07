import { Knex } from 'knex';
import LeaveRequestStatus from '../models/leaveRequestStatus';

class LeaveRequestStatusService {
  static async getLeaveRequestStatusByRequestId(requestId: number) {
    return LeaveRequestStatus.getByRequestId(requestId);
  }

  static async updateLeaveRequestStatus(
    leaveRequestStatusBody: any,
    trx?: Knex.Transaction
  ) {
    const { requestId, status, reason } = leaveRequestStatusBody;
    let existingStatus = await LeaveRequestStatus.getByRequestId(
      requestId,
      trx
    );
    if (!existingStatus) {
      return LeaveRequestStatus.create(requestId, status, reason, trx);
    } else {
      return LeaveRequestStatus.update(requestId, status, reason, trx);
    }
  }

  static async deleteLeaveRequestStatus(requestId: number) {
    return LeaveRequestStatus.delete(requestId);
  }
}

export default LeaveRequestStatusService;
