import { Request, Response } from 'express';
import PermissionService from '../services/permission';
import PermissionModel from '../models/permission';
import knex from '../db';

const permissionService = new PermissionService(new PermissionModel(knex));

export const createPermission = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const permission = req.body;
    const result = await permissionService.createPermission(permission);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPermissions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const permissions = await permissionService.getPermissions();
    res.status(200).json({ data: permissions });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePermission = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const permission = req.body;
    const result = await permissionService.updatePermission(id, permission);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePermission = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const result = await permissionService.deletePermission(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
