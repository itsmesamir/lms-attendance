import AuthenticatedRequest from '../interfaces/AuthenticatedRequest';
import { Request, Response, NextFunction } from 'express';
import { User } from '../interfaces/user';
import { verifyAccessToken } from '../utils/jwt';
import { withNameSpace } from '../utils/logger';
import { addToStore } from '../asyncStore';

import RolePermissionService from '../services/rolePermission';
import RolePermissionModel from '../models/rolePermission';
import knex from '../db';

const rolePermissionService = new RolePermissionService(
  new RolePermissionModel(knex)
);

const logger = withNameSpace('middleware/auth');

export const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  logger.info('Authenticating user');

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    logger.error('Unauthorized');
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    logger.info('Verifying access token');
    const decoded = verifyAccessToken(token) as any;

    addToStore('user', { id: +decoded.userId });
    addToStore('userToken', token);

    const { permissions = [] } =
      await rolePermissionService.fetchPermissionsByUserId(+decoded.userId);

    addToStore('userPermission', permissions);
    req.user = decoded as User;

    logger.info('User authenticated');
    next();
  } catch (error) {
    logger.error(error.message);
    return res.status(401).json({ message: error.message });
  }
};
