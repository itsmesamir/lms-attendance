import { Knex } from 'knex';

import db from '../db';
import BaseModel from './baseModel';

// crud for country

class Country extends BaseModel {
  static tableName = 'countries';

  static async getAllCountries(trx?: Knex.Transaction): Promise<any> {
    return this.queryBuilder(trx).select('*').from(this.tableName);
  }

  static async getCountryById(id: number): Promise<any> {
    return this.queryBuilder()
      .select('*')
      .from(this.tableName)
      .where('id', id)
      .first();
  }

  static async getCountryByName(name: string): Promise<any> {
    return this.queryBuilder()
      .select('*')
      .from(this.tableName)
      .where('name', name)
      .first();
  }

  static async createCountry(data: any, trx?: Knex.Transaction): Promise<any> {
    return this.queryBuilder(trx).insert(data).into(this.tableName);
  }

  static async updateCountry(id: number, data: any): Promise<any> {
    return this.queryBuilder().where('id', id).update(data);
  }

  static async deleteCountry(id: number): Promise<any> {
    return this.queryBuilder().where('id', id).del();
  }
}

export default Country;
