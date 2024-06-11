import * as express from 'express';
import {
  loginHandler,
  registerUser,
  refreshToken,
  logoutUser
} from '../controllers/authController';
import userRoutes from './user';
import { authenticate } from '../middleware/auth';
import employeeRoutes from './employee';
import countryRoutes from './country';
import fiscalYearRoutes from './fiscalYear';
import RolePermissionRoutes from './rolesPermissions';
import leaveRequestRoutes from './leaveRequest';
import leaveRequestStatusRoutes from './leaveRequestStatus';

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginHandler);

router.post('/logout', logoutUser);

// authentication routes
// router.use(authenticate);
router.use('/employee', employeeRoutes);
router.use('/country', countryRoutes);
router.use(RolePermissionRoutes);
router.use('/leave-requests', leaveRequestRoutes);
router.use('/leave-request-status', leaveRequestStatusRoutes);

export default router;
