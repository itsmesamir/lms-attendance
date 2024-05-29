import { Knex } from 'knex';
import { config } from 'dotenv';

const pathToEnv = __dirname + '/../.env';

config({ path: pathToEnv });

export const knexConfig: Knex.Config = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  migrations: {
    tableName: 'migrations_lms',
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
};

module.exports = knexConfig;
