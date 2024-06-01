import { Knex } from 'knex';

const TABLE_NAME = 'users_roles';

/**
 * Seed data for user_roles.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del();
  await knex(TABLE_NAME).insert([
    {
      id: 1,
      employee_id: 1,
      role_id: 1,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 2,
      employee_id: 2,
      role_id: 1,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 3,
      employee_id: 3,
      role_id: 3,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 4,
      employee_id: 4,
      role_id: 4,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 5,
      employee_id: 5,
      role_id: 4,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 6,
      employee_id: 6,
      role_id: 4,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 7,
      employee_id: 7,
      role_id: 3,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    }
  ]);
}
