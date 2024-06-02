import { Knex } from 'knex';

export interface Country {
  name: string;
}

export interface CountryCreateProps {
  currentUser?: any;
  country: Country;
  trx?: Knex.Transaction;
}
