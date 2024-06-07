import { Knex } from 'knex';

import { Employee } from '../interfaces/employee';
import { EmployeeTableFilters } from '../types/employee';
import EmployeeModel from '../models/employee';
import CountryModel from '../models/country';
import DepartmentModel from '../models/department';
import { withNameSpace } from '../utils/logger';
import TokenError from '../errors/TokenError';
import BadRequestError from '../errors/BadRequestError';
import { getFromStore } from '../asyncStore';

const logger = withNameSpace('services/employee');

export const createEmployee = async (
  employee: Employee,
  currentUser?: any,
  trx?: Knex.Transaction
): Promise<Employee> => {
  logger.info(
    `Creating employee with name: ${employee.first_name} ${employee.last_name}`
  );

  try {
    if (!currentUser.userId) {
      throw new TokenError('Token is invalid or expired');
    }

    const { department, email, country, manager, ...employeeData } = employee;

    const employeeWithSameEmail = await EmployeeModel.getEmployeeByEmail(email);

    if (employeeWithSameEmail) {
      throw new BadRequestError('Employee with same email already exists');
    }

    const [{ id: departmentId }, { id: countryId }, { id: managerId }] =
      await Promise.all([
        DepartmentModel.getDepartmentByName(department),
        CountryModel.getCountryByName(country),
        EmployeeModel.getEmployeeByEmail(manager)
      ]);

    logger.info(
      `departmentId: ${departmentId}, countryId: ${countryId}, managerId: ${managerId}`
    );

    const newEmployee = {
      ...employeeData,
      email,
      department_id: departmentId,
      country_id: countryId,
      manager_id: managerId,
      created_by: currentUser.userId
    };

    const employeeResponse: any = (await EmployeeModel.createEmployee(
      newEmployee,
      trx
    )) as any;

    logger.info(
      `Employee with name: ${employee.first_name} ${employee.last_name} created successfully`
    );

    return employeeResponse;
  } catch (error) {
    logger.error(`Error creating employee: ${error}`);
    throw new Error(error.message);
  }
};

export const updateEmployee = async (
  id: number,
  employee: Employee,
  currentUser?: any,
  trx?: Knex.Transaction
): Promise<Employee> => {
  logger.info(`Updating employee with id: ${id}`);

  if (!currentUser.userId) {
    throw new TokenError('Token is invalid or expired');
  }

  const { department, country, manager, ...employeeData } = employee;

  const [{ id: departmentId }, { id: countryId }, { id: managerId }] =
    await Promise.all([
      DepartmentModel.getDepartmentByName(department),
      CountryModel.getCountryByName(country),
      EmployeeModel.getEmployeeByEmail(manager)
    ]);

  const updatedEmployee = {
    ...employeeData,
    department_id: departmentId,
    country_id: countryId,
    manager_id: managerId
  };

  logger.info(
    `departmentId: ${departmentId}, countryId: ${countryId}, managerId: ${managerId}`
  );

  const updatedEmployeeDetail = (await EmployeeModel.updateEmployee(
    id,
    updatedEmployee,
    trx
  )) as any;

  logger.info(`Employee with id: ${id} updated successfully`);
  return updatedEmployeeDetail;
};

export const fetchEmployeeById = async (id: number): Promise<any> => {
  logger.info(`Fetching employee with id: ${id}`);
  const employee = await EmployeeModel.getEmployeeById(id);

  logger.info(`Employee with id: ${id} fetched successfully`);
  return employee;
};

export const fetchAllEmployees = async (
  filterParams: EmployeeTableFilters
): Promise<any> => {
  logger.info('Fetching all employees');

  const user = getFromStore<{ id: number }>('user');

  const employees = await EmployeeModel.getAllEmployees(filterParams);

  logger.info('Employees fetched successfully');
  return employees;
};

export const deleteEmployee = async (id: number): Promise<void> => {
  logger.info(`Deleting employee with id: ${id}`);
  await EmployeeModel.deleteEmployee(id);
};
