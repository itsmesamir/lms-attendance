import { Knex } from 'knex';

const TABLE_NAME = 'leave_requests';

/**
 * Create table leave_requests.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments('id').primary();
    table
      .integer('employee_id')
      .unsigned()
      .references('id')
      .inTable('employees')
      .onDelete('SET NULL');
    table
      .integer('leave_type_id')
      .unsigned()
      .references('id')
      .inTable('leave_types')
      .onDelete('SET NULL');
    table.date('start_date').notNullable();
    table.date('end_date').notNullable();
    table.integer('leave_days').notNullable();
    table.text('reason');
    table
      .enum('status', ['Requested', 'Approved', 'Rejected', 'Cancelled'])
      .notNullable()
      .defaultTo('Requested');
    table
      .integer('created_by')
      .unsigned()
      .references('id')
      .inTable('employees')
      .onDelete('SET NULL');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at');
    table
      .integer('updated_by')
      .unsigned()
      .references('id')
      .inTable('employees')
      .onDelete('SET NULL');
    table
      .integer('manager_id')
      .unsigned()
      .references('id')
      .inTable('employees')
      .onDelete('SET NULL');
  });
}

/**
 * Drop table leave_requests.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLE_NAME);
}
