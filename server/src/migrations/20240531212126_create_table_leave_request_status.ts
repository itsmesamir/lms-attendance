import { Knex } from 'knex';

const TABLE_NAME = 'leave_request_status';

/**
 * Create table leave_request_status.
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
      .onDelete('SET NULL');
    table.text('reason');
    table
      .enum('status', ['Requested', 'Approved', 'Rejected', 'Cancelled'])
      .notNullable()
      .defaultTo('Requested');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table
      .integer('created_by')
      .unsigned()
      .references('id')
      .inTable('employees')
      .onDelete('SET NULL');
  });
}

/**
 * Drop table leave_request_status.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLE_NAME);
}
