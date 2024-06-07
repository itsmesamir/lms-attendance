import { Knex } from 'knex';
import { config } from 'dotenv';

import * as lodash from 'lodash';
import { toCamelCase, toSnakeCase } from './utils/object';

const pathToEnv = __dirname + '/../.env';

config({ path: pathToEnv });

const knexConfig: Knex.Config = {
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
  },
  postProcessResponse: (result: any) => {
    if (lodash.isArray(result)) {
      return result.map((row) => toCamelCase(row));
    }

    return toCamelCase(result);
  },
  wrapIdentifier: (value: string, origImpl: (value: string) => string) => {
    if (value === '*') {
      return origImpl(value);
    }

    return origImpl(toSnakeCase(value));
  }
};

export default knexConfig;
