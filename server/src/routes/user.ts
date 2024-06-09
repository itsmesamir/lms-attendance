import * as express from 'express';
import knex from '../db';
import * as UserController from '../controllers/user';

import { authenticate } from '../middleware/auth';

const router = express.Router();

router.get('/fetch', authenticate, UserController.fetchAll);
router.get('/fetch/:id', authenticate, UserController.fetchById);
router.get('/fetch/:email', authenticate, UserController.fetchByEmail);

export default router;
