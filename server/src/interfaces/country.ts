import { Knex } from 'knex';

export interface Country {
  id?: number;
  name: string;
}

export interface CountryCreateProps {
  currentUser?: any;
  country: Country;
  trx?: Knex.Transaction;
}
