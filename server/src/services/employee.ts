import { Employee } from '../interfaces/employee';
import { EmployeeTableFilters } from '../types/employee';
import EmployeeModel from '../models/employee';
import CountryModel from '../models/country';
import DepartmentModel from '../models/department';

export const createEmployee = async (employee: Employee): Promise<Employee> => {
  const { department, country, manager, ...employeeData } = employee;

  const [{ id: departmentId }, { id: countryId }, { id: managerId }] =
    await Promise.all([
      DepartmentModel.getDepartmentByName(department),
      CountryModel.getCountryByName(country),
      EmployeeModel.getEmployeeByName({ manager })
    ]);

  const newEmployee = {
    ...employeeData,
    department_id: departmentId,
    country_id: countryId,
    manager_id: managerId
  };

  return (await EmployeeModel.createEmployee(newEmployee)) as any;
};

export const updateEmployee = async (
  id: number,
  employee: Employee
): Promise<Employee> => {
  const { department, country, manager, ...employeeData } = employee;

  const [departmentId, countryId, managerId] = await Promise.all([
    DepartmentModel.getDepartmentByName(department),
    CountryModel.getCountryByName(country),
    EmployeeModel.getEmployeeByName(manager)
  ]);

  const updatedEmployee = {
    ...employeeData,
    department_id: departmentId,
    country_id: countryId,
    manager_id: managerId
  };

  return (await EmployeeModel.updateEmployee(id, updatedEmployee)) as any;
};

export const fetchEmployeeById = async (id: number): Promise<Employee> => {
  const employee = await EmployeeModel.getEmployeeById(id);
  return employee;
};

export const fetchAllEmployees = async (
  filterParams: EmployeeTableFilters
): Promise<Employee[]> => {
  const employees = await EmployeeModel.getAllEmployees(filterParams);
  return employees;
};

export const deleteEmployee = async (id: number): Promise<void> => {
  await EmployeeModel.deleteEmployee(id);
};
