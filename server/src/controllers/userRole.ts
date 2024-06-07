import { Request, Response } from 'express';
import UserRoleService from '../services/userRole';
import UserRoleModel from '../models/userRole';
import knex from '../db';

const userRoleService = new UserRoleService(new UserRoleModel(knex));

export const assignRole = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userRole = req.body;
    const result = await userRoleService.assignRole(userRole);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeRole = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { employee_id, role_id } = req.body;
    const result = await userRoleService.removeRole(employee_id, role_id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const fetchUserRoles = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const employee_id = parseInt(req.params.employee_id, 10);
    const userRoles = await userRoleService.fetchUserRoles(employee_id);
    res.status(200).json({ data: userRoles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
