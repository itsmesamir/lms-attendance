import { Knex } from 'knex';

const TABLE_NAME = 'leave_requests';

/**
 * Seed data for leave_requests.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del();
  await knex(TABLE_NAME).insert([
    {
      id: 1,
      leave_type_id: 1,
      employee_id: 1,
      start_date: '2024-01-01',
      end_date: '2024-01-10',
      status: 'Approved',
      leave_days: 8,
      reason: 'Vacation',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 2,
      leave_type_id: 2,
      employee_id: 2,
      start_date: '2024-02-01',
      end_date: '2024-02-05',
      status: 'Requested',
      leave_days: 4,
      reason: 'Family emergency',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 3,
      leave_type_id: 3,
      employee_id: 3,
      start_date: '2024-03-01',
      end_date: '2024-03-05',
      status: 'Rejected',
      leave_days: 4,
      reason: 'Insufficient leave evidence',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 4,
      leave_type_id: 4,
      employee_id: 4,
      start_date: '2024-04-01',
      end_date: '2024-04-10',
      status: 'Approved',
      leave_days: 8,
      reason: 'Personal reasons',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 5,
      leave_type_id: 5,
      employee_id: 5,
      start_date: '2024-05-01',
      end_date: '2024-05-10',
      status: 'Requested',
      leave_days: 8,
      reason: 'Vacation',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 6,
      leave_type_id: 6,
      employee_id: 6,
      start_date: '2024-06-01',
      end_date: '2024-06-10',
      status: 'Approved',
      leave_days: 8,
      reason: 'Family vacation',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 7,
      leave_type_id: 7,
      employee_id: 7,
      start_date: '2024-07-01',
      end_date: '2024-07-10',
      status: 'Rejected',
      leave_days: 8,
      reason: 'Personal reasons',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 8,
      leave_type_id: 1,
      employee_id: 1,
      start_date: '2024-08-01',
      end_date: '2024-08-10',
      status: 'Approved',
      leave_days: 8,
      reason: 'Vacation',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 9,
      leave_type_id: 2,
      employee_id: 2,
      start_date: '2024-09-01',
      end_date: '2024-09-05',
      status: 'Requested',
      leave_days: 4,
      reason: 'Family emergency',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 10,
      leave_type_id: 3,
      employee_id: 3,
      start_date: '2024-10-01',
      end_date: '2024-10-05',
      status: 'Rejected',
      leave_days: 4,
      reason: 'Insufficient leave balance',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 11,
      leave_type_id: 4,
      employee_id: 4,
      start_date: '2024-11-01',
      end_date: '2024-11-10',
      status: 'Approved',
      leave_days: 8,
      reason: 'Personal reasons',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 12,
      leave_type_id: 5,
      employee_id: 5,
      start_date: '2024-12-01',
      end_date: '2024-12-10',
      status: 'Requested',
      leave_days: 8,
      reason: 'Vacation',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 13,
      leave_type_id: 6,
      employee_id: 6,
      start_date: '2025-01-01',
      end_date: '2025-01-10',
      status: 'Approved',
      leave_days: 8,
      reason: 'Family vacation',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 14,
      leave_type_id: 7,
      employee_id: 7,
      start_date: '2025-02-01',
      end_date: '2025-02-10',
      status: 'Rejected',
      leave_days: 8,
      reason: 'Personal reasons',
      created_by: 1,
      updated_by: 1
    },
    {
      id: 15,
      leave_type_id: 1,
      employee_id: 1,
      start_date: '2025-03-01',
      end_date: '2025-03-10',
      status: 'Approved',
      leave_days: 8,
      reason: 'Vacation',
      created_by: 1,
      updated_by: 1
    }
  ]);
}
