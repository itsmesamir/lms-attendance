import { Request, Response, NextFunction } from 'express';

import * as userRoleService from '../services/userRole';

export const assignRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userRole = await userRoleService.assignRole(req.body);
    res.status(201).json(userRole);
  } catch (error) {
    next(error);
  }
};

export const removeRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await userRoleService.removeRole(req.body);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
