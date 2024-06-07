import * as express from 'express';
import * as LeaveRequestStatusController from '../controllers/leaveRequestStatus';
const router = express.Router();

router.put(
  '/:requestId',
  LeaveRequestStatusController.updateLeaveRequestStatus
);

export default router;
