import * as express from 'express';
import * as LeaveRequestController from '../controllers/leaveRequest';

const router = express.Router();

router.post('/', LeaveRequestController.createLeaveRequest);
router.get('/', LeaveRequestController.getAllLeaveRequests);
router.get('/:employeeId', LeaveRequestController.getLeaveRequestsByEmployeeId);
router.get('/details/:id', LeaveRequestController.getLeaveRequestById);
router.put('/:id', LeaveRequestController.updateLeaveRequest);
router.delete('/:id', LeaveRequestController.deleteLeaveRequest);

export default router;
