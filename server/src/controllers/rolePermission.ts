import { Request, Response, NextFunction } from 'express';

import RolePermissionService from '../services/rolePermission';
import RolePermissionModel from '../models/rolePermission';
import knex from '../db';

const rolePermissionService = new RolePermissionService(
  new RolePermissionModel(knex)
);

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
  const { role_id, permission_id } = req.body;
  try {
    await rolePermissionService.removePermission(role_id, permission_id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const fetchRolePermissions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const role_id = parseInt(req.params.role_id, 10);
    const rolePermissions =
      await rolePermissionService.fetchRolePermissions(role_id);
    res.status(200).json({ data: rolePermissions });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const fetchPermissionsByUserId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const employee_id = parseInt(req.params.employee_id, 10);
    const permissions =
      await rolePermissionService.fetchPermissionsByUserId(employee_id);
    res.status(200).json({ data: permissions });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
