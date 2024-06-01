import { Knex } from 'knex';

import BaseModel from './baseModel';
import { EmployeeTableFilters } from 'employee';

class Employee extends BaseModel {
  static tableName = 'employees';

  static baseQuery(trx?: Knex.Transaction) {
    return this.queryBuilder(trx)
      .select(
        'employees.id',
        'employees.first_name',
        'employees.last_name',
        'employees.email',
        'employees.password',
        'employees.designation',
        'employees.created_at',
        'employees.updated_at',
        'employees.deleted_at',
        'employees.created_by',
        'employees.updated_by',
        'employees.deleted_by',
        'departments.id as department:id',
        'departments.name as department:name',
        'countries.id as country:id',
        'countries.name as country:name',
        'managers.id as manager:id',
        'managers.first_name as manager:first_name',
        'managers.last_name as manager:last_name',
        'managers.email as manager:email',
        'managers.designation as manager:designation',
        'managers.department_id as manager:department:id',
        'managers.department_name as manager:department:name',
        'managers.country_id as manager:country:id',
        'managers.country_name as manager:country:name'
      )
      .from(this.tableName)
      .leftJoin('departments', 'employees.department_id', 'departments.id')
      .leftJoin('countries', 'employees.country_id', 'countries.id')
      .leftJoin('employees as managers', 'employees.manager_id', 'managers.id');
  }

  static getAllEmployees(
    filterParams: EmployeeTableFilters,
    trx?: Knex.Transaction
  ) {
    const query = this.baseQuery(trx);

    if (filterParams.department) {
      query.where('departments.name', filterParams.department);
    }

    if (filterParams.country) {
      query.where('countries.name', filterParams.country);
    }

    if (filterParams.manager) {
      // from manager name filter need to concatenate first_name and last_name
      query.where(
        this.queryBuilder().raw(
          'CONCAT(managers.first_name, managers.last_name)',
          filterParams.manager
        )
      );
    }

    if (filterParams.limit) {
      query.limit(filterParams.limit);
    }

    if (filterParams.offset) {
      query.offset(filterParams.offset);
    }

    return query;
  }

  static getEmployeeById(id: number, trx?: Knex.Transaction) {
    return this.baseQuery(trx).where('employees.id', id).first();
  }

  static getEmployeeByName(employee: any, trx?: Knex.Transaction): any {
    const query = this.baseQuery(trx);

    query
      .where(
        this.queryBuilder().raw(
          'CONCAT(managers.first_name, managers.last_name)',
          employee
        )
      )
      .first();

    return query;
  }

  static getEmployeeByEmail(email: string, trx?: Knex.Transaction) {
    return this.baseQuery(trx).where('employees.email', email).first();
  }

  static createEmployee(employee: any, trx?: Knex.Transaction) {
    return this.queryBuilder(trx)
      .insert(employee)
      .into(this.tableName)
      .returning('*');
  }

  static updateEmployee(id: number, employee: any, trx?: Knex.Transaction) {
    return this.queryBuilder(trx)
      .update(employee)
      .from(this.tableName)
      .where('id', id)
      .returning('*');
  }

  static deleteEmployee(id: number, trx?: Knex.Transaction) {
    return this.queryBuilder(trx).delete().from(this.tableName).where('id', id);
  }

  static getEmployeesByEmployeeId(id: number, trx?: Knex.Transaction) {
    return this.queryBuilder(trx)
      .select('*')
      .from(this.tableName)
      .where('manager_id', id);
  }
}

export default Employee;
