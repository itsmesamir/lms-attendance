import { Knex } from 'knex';
import logger from '../utils/logger';
import LeaveRequestStatus from '../models/leaveRequestStatus';

class LeaveRequestStatusService {
  static async getLeaveRequestStatusByRequestId(requestId: number) {
    return LeaveRequestStatus.getByRequestId(requestId);
  }

  static async updateLeaveRequestStatus(
    leaveRequestStatusBody: any,
    trx?: Knex.Transaction
  ) {
    logger.info('Updating leave request status');
    const { leaveRequestId } = leaveRequestStatusBody;
    // let existingStatus = await LeaveRequestStatus.getByRequestId(
    //   leaveRequestId,
    //   trx
    // );

    // if (!existingStatus) {
    return LeaveRequestStatus.create(leaveRequestStatusBody, trx);
    // } else {
    //   return LeaveRequestStatus.update(
    //     leaveRequestId,
    //     leaveRequestStatusBody,
    //     trx
    //   );
    // }
  }

  static async deleteLeaveRequestStatus(requestId: number) {
    return LeaveRequestStatus.delete(requestId);
  }
}

export default LeaveRequestStatusService;
