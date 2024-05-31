import { Knex } from 'knex';

const TABLE_NAME = 'leave_notifications';

/**
 * Create table leave_notifications.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments('id').primary();
    table
      .integer('leave_request_id')
      .unsigned()
      .references('id')
      .inTable('leave_requests')
      .onDelete('CASCADE');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table
      .integer('created_by')
      .unsigned()
      .references('id')
      .inTable('employees');
  });
}

/**
 * Drop table leave_notifications.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLE_NAME);
}
