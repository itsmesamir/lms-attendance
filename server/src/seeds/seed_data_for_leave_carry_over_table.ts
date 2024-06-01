import { Knex } from 'knex';

const TABLE_NAME = 'leave_carry_over';

/**
 * Seed data for leave_carry_over.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del();
  await knex(TABLE_NAME).insert([
    {
      from_fiscal_year_id: 1,
      is_carried_over: true,
      notes: 'Carried over from previous year',
      created_at: knex.fn.now(),
      created_by: 1
    },
    {
      from_fiscal_year_id: 2,
      is_carried_over: false,
      notes: 'No carry over',
      created_at: knex.fn.now(),
      created_by: 2
    },
    {
      from_fiscal_year_id: 3,
      is_carried_over: true,
      notes: 'Carried over from previous year',
      created_at: knex.fn.now(),
      created_by: 3
    },
    {
      from_fiscal_year_id: 4,
      is_carried_over: false,
      notes: 'No carry over',
      created_at: knex.fn.now(),
      created_by: 4
    },
    {
      from_fiscal_year_id: 5,
      is_carried_over: true,
      notes: 'Carried over from previous year',
      created_at: knex.fn.now(),
      created_by: 5
    },
    {
      from_fiscal_year_id: 6,
      is_carried_over: false,
      notes: 'No carry over',
      created_at: knex.fn.now(),
      created_by: 6
    },
    {
      from_fiscal_year_id: 7,
      is_carried_over: true,
      notes: 'Carried over from previous year',
      created_at: knex.fn.now(),
      created_by: 7
    },
    {
      from_fiscal_year_id: 8,
      is_carried_over: false,
      notes: 'No carry over',
      created_at: knex.fn.now(),
      created_by: 1
    },
    {
      from_fiscal_year_id: 9,
      is_carried_over: true,
      notes: 'Carried over from previous year',
      created_at: knex.fn.now(),
      created_by: 2
    },
    {
      from_fiscal_year_id: 10,
      is_carried_over: false,
      notes: 'No carry over',
      created_at: knex.fn.now(),
      created_by: 3
    },
    {
      from_fiscal_year_id: 11,
      is_carried_over: true,
      notes: 'Carried over from previous year',
      created_at: knex.fn.now(),
      created_by: 4
    },
    {
      from_fiscal_year_id: 12,
      is_carried_over: false,
      notes: 'No carry over',
      created_at: knex.fn.now(),
      created_by: 5
    }
  ]);
}
