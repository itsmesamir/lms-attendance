import { Knex } from 'knex';

import db from '../db';

// crud for country

class Country {
  static tableName = 'countries';

  static async getAllCountries(): Promise<any> {
    return db(Country.tableName).select('*');
  }

  static async getCountryById(id: number): Promise<any> {
    return db(Country.tableName).select('*').where('id', id).first();
  }

  static async getCountryByName(name: string): Promise<any> {
    return db(Country.tableName).select('*').where('name', name).first();
  }

  static async createCountry(data: any, trx?: Knex.Transaction): Promise<any> {
    return db(Country.tableName as string)
      .insert(data)
      .transacting(trx!); // Add the non-null assertion operator (!) to ensure trx is defined
  }

  static async updateCountry(id: number, data: any): Promise<any> {
    return db(Country.tableName).where('id', id).update(data);
  }

  static async deleteCountry(id: number): Promise<any> {
    return db(Country.tableName).where('id', id).del();
  }
}

export default Country;
