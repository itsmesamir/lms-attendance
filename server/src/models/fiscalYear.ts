import { Knex } from 'knex';

import db from '../db';

class FiscalYear {
  static tableName = 'fiscal_years';

  static async getAll(): Promise<any> {
    return db(FiscalYear.tableName).select('*');
  }

  static async getByCountry(countryId: number): Promise<any> {
    return db(FiscalYear.tableName)
      .select('*')
      .whereIn(
        'id',
        db(FiscalYear.tableName).max('id as id').groupBy('country_id')
      )
      .andWhere('country_id', countryId)
      .andWhere('is_current', 1)
      .first();
  }

  static async getById(id: number): Promise<any> {
    return db(FiscalYear.tableName).select('*').where('id', id).first();
  }

  static async createFiscalYear(
    data: any,
    trx?: Knex.Transaction
  ): Promise<any> {
    return db(FiscalYear.tableName as string)
      .insert(data)
      .transacting(trx!); // Add the non-null assertion operator (!) to ensure trx is defined
  }

  static async updateFiscalYear(id: number, data: any): Promise<any> {
    return db(FiscalYear.tableName).where('id', id).update(data);
  }

  static async deleteFiscalYear(id: number): Promise<any> {
    return db(FiscalYear.tableName).where('id', id).del();
  }
}

export default FiscalYear;
