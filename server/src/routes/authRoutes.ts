import * as express from 'express';
import {
  loginHandler,
  registerUser,
  refreshToken,
  logoutUser
} from '../controllers/authController';
import { fetchAll, fetchByEmail, fetchById } from '../controllers/user';
import { authenticate } from '../middleware/auth';
import employeeRoutes from './employee';
import countryRoutes from './country';

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginHandler);

router.post('/logout', logoutUser);

// authentication routes
router.use(authenticate);
router.use('/employee', employeeRoutes);
router.use('/country', countryRoutes);

// Login route
// router.post('/login', loginHandler);

// Refresh token route
// router.post('/token', refreshToken);

// Fetch user by email route
router.get('/user/email', fetchByEmail);

// Fetch all users route
router.get('/user/all', fetchAll);

// Fetch user by token route
// router.get('/user/token', fetch);

// Fetch user by ID route
router.get('/user/:id', fetchById);

export default router;
