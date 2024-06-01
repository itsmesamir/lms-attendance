import { Knex } from 'knex';

const TABLE_NAME = 'users';

/**
 * Seed data for users.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del();
  await knex(TABLE_NAME).insert([
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      password: 'hashedpassword1',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      employee_id: 1,
      created_by: 1,
      updated_by: 1
    },
    {
      id: 2,
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'jane.smith@example.com',
      password: 'hashedpassword2',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      employee_id: 2,
      created_by: 1,
      updated_by: 1
    },
    {
      id: 3,
      first_name: 'Alice',
      last_name: 'Johnson',
      email: 'alice.johnson@example.com',
      password: 'hashedpassword3',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      employee_id: 3,
      created_by: 1,
      updated_by: 1
    },
    {
      id: 4,
      first_name: 'Bob',
      last_name: 'Brown',
      email: 'bob.brown@example.com',
      password: 'hashedpassword4',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      employee_id: 4,
      created_by: 1,
      updated_by: 1
    },
    {
      id: 5,
      first_name: 'Eve',
      last_name: 'Taylor',
      email: 'eve.taylor@example.com',
      password: 'hashedpassword5',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      employee_id: 5,
      created_by: 1,
      updated_by: 1
    },
    {
      id: 6,
      first_name: 'Michael',
      last_name: 'Clark',
      email: 'michael.clark@example.com',
      password: 'hashedpassword6',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      employee_id: 6,
      created_by: 1,
      updated_by: 1
    },
    {
      id: 7,
      first_name: 'Sarah',
      last_name: 'Adams',
      email: 'sarah.adams@example.com',
      password: 'hashedpassword7',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      employee_id: 7,
      created_by: 1,
      updated_by: 1
    }
  ]);
}
