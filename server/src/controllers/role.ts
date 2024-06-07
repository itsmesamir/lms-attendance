import { Request, Response, NextFunction } from 'express';

import RoleService from '../services/role';
import RoleModel from '../models/role';
import knex from '../db';

const roleService = new RoleService(new RoleModel(knex));

export const createRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const role = await roleService.createRole(req.body);
    res.status(201).json(role);
  } catch (error) {
    next(error);
  }
};

export const getRoles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const roles = await roleService.getRoles();
    res.json({ data: roles });
  } catch (error) {
    next(error);
  }
};

export const updateRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const role = await roleService.updateRole(+req.params.id, req.body);
    res.json(role);
  } catch (error) {
    next(error);
  }
};

export const deleteRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await roleService.deleteRole(+req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
