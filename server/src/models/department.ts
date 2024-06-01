import { Knex } from 'knex';

import db from '../db';

class Department {
  static tableName = 'departments';

  static async getAllDepartments(): Promise<any> {
    return db(Department.tableName).select('*');
  }

  static async getDepartmentByName(name: string): Promise<any> {
    return db(Department.tableName).select('*').where('name', name).first();
  }

  static async getDepartmentById(id: number): Promise<any> {
    return db(Department.tableName).select('*').where('id', id).first();
  }

  static async createDepartment(
    data: any,
    trx?: Knex.Transaction
  ): Promise<any> {
    return db(Department.tableName as string)
      .insert(data)
      .transacting(trx!); // Add the non-null assertion operator (!) to ensure trx is defined
  }

  static async updateDepartment(id: number, data: any): Promise<any> {
    return db(Department.tableName).where('id', id).update(data);
  }

  static async deleteDepartment(id: number): Promise<any> {
    return db(Department.tableName).where('id', id).del();
  }
}

export default Department;
