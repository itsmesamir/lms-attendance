import { Knex } from 'knex';

const TABLE_NAME = 'roles';

/**
 * Seed data for roles.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del();
  await knex(TABLE_NAME).insert([
    { id: 1, name: 'Admin', is_active: true, created_by: 1, updated_by: 1 },
    { id: 2, name: 'User', is_active: true, created_by: 1, updated_by: 1 },
    { id: 3, name: 'Manager', is_active: true, created_by: 1, updated_by: 1 },
    { id: 4, name: 'HR', is_active: true, created_by: 1, updated_by: 1 },
    { id: 5, name: 'Finance', is_active: true, created_by: 1, updated_by: 1 },
    { id: 6, name: 'Engineer', is_active: true, created_by: 1, updated_by: 1 },
    { id: 7, name: 'Sales', is_active: true, created_by: 1, updated_by: 1 }
  ]);
}
