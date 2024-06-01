import { Knex } from 'knex';

const TABLE_NAME = 'leave_request_status';

/**
 * Seed data for leave_request_status.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del();
  await knex(TABLE_NAME).insert([
    {
      leave_request_id: 1,
      reason: 'Vacation',
      status: 'Requested',
      created_at: knex.fn.now(),
      created_by: 1
    },
    {
      leave_request_id: 1,
      reason: 'Vacation',
      status: 'Approved',
      created_at: knex.fn.now(),
      created_by: 2
    },
    {
      leave_request_id: 2,
      reason: 'Sick leave',
      status: 'Requested',
      created_at: knex.fn.now(),
      created_by: 3
    },
    {
      leave_request_id: 2,
      reason: 'Sick leave',
      status: 'Approved',
      created_at: knex.fn.now(),
      created_by: 4
    },
    {
      leave_request_id: 3,
      reason: 'Personal reasons',
      status: 'Requested',
      created_at: knex.fn.now(),
      created_by: 5
    },
    {
      leave_request_id: 3,
      reason: 'Personal reasons',
      status: 'Rejected',
      created_at: knex.fn.now(),
      created_by: 6
    },
    {
      leave_request_id: 4,
      reason: 'Family emergency',
      status: 'Requested',
      created_at: knex.fn.now(),
      created_by: 7
    },
    {
      leave_request_id: 4,
      reason: 'Family emergency',
      status: 'Approved',
      created_at: knex.fn.now(),
      created_by: 1
    },
    {
      leave_request_id: 5,
      reason: 'Travel',
      status: 'Requested',
      created_at: knex.fn.now(),
      created_by: 2
    },
    {
      leave_request_id: 5,
      reason: 'Travel',
      status: 'Approved',
      created_at: knex.fn.now(),
      created_by: 3
    },
    {
      leave_request_id: 6,
      reason: 'Training',
      status: 'Requested',
      created_at: knex.fn.now(),
      created_by: 4
    },
    {
      leave_request_id: 6,
      reason: 'Training',
      status: 'Approved',
      created_at: knex.fn.now(),
      created_by: 5
    },
    {
      leave_request_id: 7,
      reason: 'Personal development',
      status: 'Requested',
      created_at: knex.fn.now(),
      created_by: 6
    },
    {
      leave_request_id: 7,
      reason: 'Personal development',
      status: 'Rejected',
      created_at: knex.fn.now(),
      created_by: 7
    },
    {
      leave_request_id: 8,
      reason: 'Vacation',
      status: 'Requested',
      created_at: knex.fn.now(),
      created_by: 1
    },
    {
      leave_request_id: 8,
      reason: 'Vacation',
      status: 'Approved',
      created_at: knex.fn.now(),
      created_by: 2
    },
    {
      leave_request_id: 9,
      reason: 'Sick leave',
      status: 'Requested',
      created_at: knex.fn.now(),
      created_by: 3
    },
    {
      leave_request_id: 9,
      reason: 'Sick leave',
      status: 'Approved',
      created_at: knex.fn.now(),
      created_by: 4
    },
    {
      leave_request_id: 10,
      reason: 'Personal reasons',
      status: 'Requested',
      created_at: knex.fn.now(),
      created_by: 5
    },
    {
      leave_request_id: 10,
      reason: 'Personal reasons not valid',
      status: 'Rejected',
      created_at: knex.fn.now(),
      created_by: 6
    },
    {
      leave_request_id: 11,
      reason: 'Family emergency',
      status: 'Requested',
      created_at: knex.fn.now(),
      created_by: 7
    },
    {
      leave_request_id: 11,
      reason: 'Family emergency',
      status: 'Approved',
      created_at: knex.fn.now(),
      created_by: 1
    },
    {
      leave_request_id: 12,
      reason: 'Travel',
      status: 'Requested',
      created_at: knex.fn.now(),
      created_by: 2
    },
    {
      leave_request_id: 12,
      reason: 'Travel',
      status: 'Approved',
      created_at: knex.fn.now(),
      created_by: 3
    },
    {
      leave_request_id: 13,
      reason: 'Training',
      status: 'Requested',
      created_at: knex.fn.now(),
      created_by: 4
    },
    {
      leave_request_id: 13,
      reason: 'Training',
      status: 'Approved',
      created_at: knex.fn.now(),
      created_by: 5
    },
    {
      leave_request_id: 14,
      reason: 'Personal development',
      status: 'Requested',
      created_at: knex.fn.now(),
      created_by: 6
    },
    {
      leave_request_id: 14,
      reason: 'Not a valid reason',
      status: 'Rejected',
      created_at: knex.fn.now(),
      created_by: 7
    },
    {
      leave_request_id: 15,
      reason: 'Vacation',
      status: 'Requested',
      created_at: knex.fn.now(),
      created_by: 1
    },
    {
      leave_request_id: 15,
      reason: 'Vacation',
      status: 'Approved',
      created_at: knex.fn.now(),
      created_by: 2
    }
  ]);
}
