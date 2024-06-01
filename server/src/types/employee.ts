// filters of the employee

export interface EmployeeTableFilters {
  department?: string;
  country?: string;
  manager?: number;
  limit?: number;
  offset?: number;
}
