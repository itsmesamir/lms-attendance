import { Knex } from 'knex';

const TABLE_NAME = 'leave_notifications';

/**
 * Seed data for leave_notifications.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del();
  await knex(TABLE_NAME).insert([
    { leave_request_id: 1, created_at: knex.fn.now(), created_by: 1 },
    { leave_request_id: 2, created_at: knex.fn.now(), created_by: 2 },
    { leave_request_id: 3, created_at: knex.fn.now(), created_by: 3 },
    { leave_request_id: 4, created_at: knex.fn.now(), created_by: 4 },
    { leave_request_id: 5, created_at: knex.fn.now(), created_by: 5 },
    { leave_request_id: 6, created_at: knex.fn.now(), created_by: 6 },
    { leave_request_id: 7, created_at: knex.fn.now(), created_by: 7 },
    { leave_request_id: 8, created_at: knex.fn.now(), created_by: 1 },
    { leave_request_id: 9, created_at: knex.fn.now(), created_by: 2 },
    { leave_request_id: 10, created_at: knex.fn.now(), created_by: 3 },
    { leave_request_id: 11, created_at: knex.fn.now(), created_by: 4 },
    { leave_request_id: 12, created_at: knex.fn.now(), created_by: 5 },
    { leave_request_id: 13, created_at: knex.fn.now(), created_by: 6 },
    { leave_request_id: 14, created_at: knex.fn.now(), created_by: 7 },
    { leave_request_id: 15, created_at: knex.fn.now(), created_by: 1 }
  ]);
}
