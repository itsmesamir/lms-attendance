import express, { Request, Response, NextFunction } from 'express';
import * as roleController from '../controllers/roleController';

const router = express.Router();

router.post('/roles', roleController.createRole);
router.get('/roles', roleController.getRoles);
router.put('/roles/:id', roleController.updateRole);
router.delete('/roles/:id', roleController.deleteRole);

export default router;
