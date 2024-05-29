import knex from 'knex';
import { knexConfig } from './knexFile';

const db = knex(knexConfig);

export default db;
