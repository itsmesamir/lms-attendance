import { Request, Response, NextFunction } from 'express';

import * as employeeService from '../services/employee';

export const createEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employee = await employeeService.createEmployee(req.body);
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
    res.json(employee);
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
    res.json(employees);
  } catch (error) {
    next(error);
  }
};

export const updateEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employee = await employeeService.updateEmployee(
      +req.params.id,
      req.body
    );
    res.json(employee);
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
