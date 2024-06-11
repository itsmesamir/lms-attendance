export type Department = {
  id: number;
  name: string;
};

export type Country = {
  id: number;
  name: string;
};

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  designation: string;
  department: Department;
  country: Country;
};

export type EmployeeData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  designation: string;
  department: Department;
  country: Country;
  manager: Employee;
};
