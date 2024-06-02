import { Request, Response, NextFunction } from 'express';

import * as employeeService from '../services/employee';
import AuthenticatedRequest from '../interfaces/AuthenticatedRequest';

export const createEmployee = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authUser = req.user;
    const employee = await employeeService.createEmployee(req.body, authUser);
    res.status(201).json(employee);
  } catch (error) {
    next(error);
  }
};

export const fetchEmployeeById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employee = await employeeService.fetchEmployeeById(+req.params.id);
    res.json({ data: employee });
  } catch (error) {
    next(error);
  }
};

export const fetchAllEmployees = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employees = await employeeService.fetchAllEmployees(req.query);
    res.json({ data: employees });
  } catch (error) {
    next(error);
  }
};

export const updateEmployee = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const employee = await employeeService.updateEmployee(
      +req.params.id,
      req.body,
      req.user
    );
    res.json({ data: employee });
  } catch (error) {
    next(error);
  }
};

export const deleteEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await employeeService.deleteEmployee(+req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
