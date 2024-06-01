import { Knex } from 'knex';

const TABLE_NAME = 'leave_balances';

/**
 * Seed data for leave_balances.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del();
  await knex(TABLE_NAME).insert([
    // USA
    {
      employee_id: 1,
      leave_type_id: 1,
      entitlement: 20,
      remaining_days: 20,
      expires_on: '2023-12-31',
      country_id: 1,
      fiscal_year_id: 1,
      created_by: 1
    },
    {
      employee_id: 1,
      leave_type_id: 1,
      entitlement: 20,
      remaining_days: 10,
      expires_on: '2024-12-31',
      country_id: 1,
      fiscal_year_id: 2,
      created_by: 1
    },
    {
      employee_id: 1,
      leave_type_id: 1,
      entitlement: 20,
      remaining_days: 20,
      expires_on: '2025-12-31',
      country_id: 1,
      fiscal_year_id: 3,
      created_by: 1
    },
    // Canada
    {
      employee_id: 2,
      leave_type_id: 2,
      entitlement: 15,
      remaining_days: 15,
      expires_on: '2023-12-31',
      country_id: 2,
      fiscal_year_id: 4,
      created_by: 2
    },
    {
      employee_id: 2,
      leave_type_id: 2,
      entitlement: 15,
      remaining_days: 5,
      expires_on: '2024-12-31',
      country_id: 2,
      fiscal_year_id: 5,
      created_by: 2
    },
    {
      employee_id: 2,
      leave_type_id: 2,
      entitlement: 15,
      remaining_days: 15,
      expires_on: '2025-12-31',
      country_id: 2,
      fiscal_year_id: 6,
      created_by: 2
    },
    // Nepal
    {
      employee_id: 3,
      leave_type_id: 3,
      entitlement: 25,
      remaining_days: 25,
      expires_on: '2023-12-31',
      country_id: 3,
      fiscal_year_id: 7,
      created_by: 3
    },
    {
      employee_id: 3,
      leave_type_id: 3,
      entitlement: 25,
      remaining_days: 15,
      expires_on: '2024-12-31',
      country_id: 3,
      fiscal_year_id: 8,
      created_by: 3
    },
    {
      employee_id: 3,
      leave_type_id: 3,
      entitlement: 25,
      remaining_days: 25,
      expires_on: '2025-12-31',
      country_id: 3,
      fiscal_year_id: 9,
      created_by: 3
    },
    // India
    {
      employee_id: 4,
      leave_type_id: 4,
      entitlement: 18,
      remaining_days: 18,
      expires_on: '2023-12-31',
      country_id: 4,
      fiscal_year_id: 10,
      created_by: 4
    },
    {
      employee_id: 4,
      leave_type_id: 4,
      entitlement: 18,
      remaining_days: 8,
      expires_on: '2024-12-31',
      country_id: 4,
      fiscal_year_id: 11,
      created_by: 4
    },
    {
      employee_id: 4,
      leave_type_id: 4,
      entitlement: 18,
      remaining_days: 18,
      expires_on: '2025-12-31',
      country_id: 4,
      fiscal_year_id: 12,
      created_by: 4
    }
  ]);
}
