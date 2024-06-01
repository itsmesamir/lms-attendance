import { Knex } from 'knex';

const TABLE_NAME = 'departments';

/**
 * Seed data for departments.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del();
  await knex(TABLE_NAME).insert([
    {
      id: 1,
      name: 'Engineering',
      description: 'Handles all engineering tasks',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 2,
      name: 'Product',
      description: 'Oversees product development',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 3,
      name: 'HR',
      description: 'Manages human resources',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 4,
      name: 'Finance',
      description: 'Manages financial operations',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 5,
      name: 'Sales',
      description: 'Handles sales and customer relationships',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 6,
      name: 'Marketing',
      description: 'Oversees marketing campaigns',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 7,
      name: 'Support',
      description: 'Provides customer support',
      created_by: 1,
      updated_by: 1
    }
  ]);
}
