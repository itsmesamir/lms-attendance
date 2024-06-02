import { Request, Response, NextFunction } from 'express';

import * as rolePermissionService from '../services/rolePermission';

export const assignPermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const rolePermission = await rolePermissionService.assignPermission(
      req.body
    );
    res.status(201).json(rolePermission);
  } catch (error) {
    next(error);
  }
};

export const removePermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await rolePermissionService.removePermission(req.body);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
