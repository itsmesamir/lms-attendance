import { Request, Response, NextFunction } from 'express';

import * as permissionService from '../services/permission';

import AuthenticatedRequest from '../interfaces/AuthenticatedRequest';

export const createPermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const permission = await permissionService.createPermission(req.body);
    res.status(201).json(permission);
  } catch (error) {
    next(error);
  }
};

export const getPermissions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const permissions = await permissionService.getPermissions();
    res.json(permissions);
  } catch (error) {
    next(error);
  }
};

export const updatePermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const permission = await permissionService.updatePermission(
      req.params.id,
      req.body
    );
    res.json(permission);
  } catch (error) {
    next(error);
  }
};

export const deletePermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await permissionService.deletePermission(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
