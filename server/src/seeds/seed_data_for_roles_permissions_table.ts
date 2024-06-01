import { Knex } from 'knex';

const TABLE_NAME = 'roles_permissions';

/**
 * Seed data for roles_permissions.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del();
  await knex(TABLE_NAME).insert([
    {
      id: 1,
      role_id: 1,
      permission_id: 1,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 2,
      role_id: 1,
      permission_id: 2,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 3,
      role_id: 2,
      permission_id: 1,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 4,
      role_id: 2,
      permission_id: 2,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 5,
      role_id: 3,
      permission_id: 1,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 6,
      role_id: 3,
      permission_id: 2,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      id: 7,
      role_id: 4,
      permission_id: 1,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    }
  ]);
}
