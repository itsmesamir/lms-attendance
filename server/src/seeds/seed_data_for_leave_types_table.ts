import { Knex } from 'knex';

const TABLE_NAME = 'leave_types';

/**
 * Seed data for leave_types.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del();
  await knex(TABLE_NAME).insert([
    // USA
    {
      name: 'Vacation Leave',
      country_id: 1,
      is_transferable: 1,
      transferable_days: 10,
      expiry_days: 365,
      created_by: 1
    },
    {
      name: 'Sick Leave',
      country_id: 1,
      is_transferable: 0,
      transferable_days: 0,
      expiry_days: 30,
      created_by: 1
    },
    {
      name: 'Maternity Leave',
      country_id: 1,
      is_transferable: 0,
      transferable_days: 0,
      expiry_days: 90,
      created_by: 1
    },
    {
      name: 'Paternity Leave',
      country_id: 1,
      is_transferable: 0,
      transferable_days: 0,
      expiry_days: 30,
      created_by: 1
    },
    // Canada
    {
      name: 'Vacation Leave',
      country_id: 2,
      is_transferable: 1,
      transferable_days: 15,
      expiry_days: 365,
      created_by: 1
    },
    {
      name: 'Sick Leave',
      country_id: 2,
      is_transferable: 0,
      transferable_days: 0,
      expiry_days: 30,
      created_by: 1
    },
    {
      name: 'Family Responsibility Leave',
      country_id: 2,
      is_transferable: 0,
      transferable_days: 0,
      expiry_days: 3,
      created_by: 1
    },
    {
      name: 'Bereavement Leave',
      country_id: 2,
      is_transferable: 0,
      transferable_days: 0,
      expiry_days: 5,
      created_by: 1
    },
    // Nepal
    {
      name: 'Casual Leave',
      country_id: 3,
      is_transferable: 0,
      transferable_days: 0,
      expiry_days: 365,
      created_by: 1
    },
    {
      name: 'Sick Leave',
      country_id: 3,
      is_transferable: 0,
      transferable_days: 0,
      expiry_days: 30,
      created_by: 1
    },
    {
      name: 'Marriage Leave',
      country_id: 3,
      is_transferable: 0,
      transferable_days: 0,
      expiry_days: 7,
      created_by: 1
    },
    {
      name: 'Public Holiday Leave',
      country_id: 3,
      is_transferable: 0,
      transferable_days: 0,
      expiry_days: 0,
      created_by: 1
    },
    // India
    {
      name: 'Earned Leave',
      country_id: 4,
      is_transferable: 1,
      transferable_days: 12,
      expiry_days: 365,
      created_by: 1
    },
    {
      name: 'Sick Leave',
      country_id: 4,
      is_transferable: 0,
      transferable_days: 0,
      expiry_days: 30,
      created_by: 1
    },
    {
      name: 'Casual Leave',
      country_id: 4,
      is_transferable: 0,
      transferable_days: 0,
      expiry_days: 365,
      created_by: 1
    },
    {
      name: 'Compensatory Leave',
      country_id: 4,
      is_transferable: 0,
      transferable_days: 0,
      expiry_days: 60,
      created_by: 1
    }
  ]);
}
