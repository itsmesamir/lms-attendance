import { Knex } from 'knex';

const TABLE_NAME = 'leave_balances';

/**
 * Create table leave_balances.
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
    table.integer('entitlement').notNullable();
    table.integer('remaining_days').notNullable();
    table.date('expires_on');
    table.text('reason');
    table
      .integer('country_id')
      .unsigned()
      .references('id')
      .inTable('countries')
      .onDelete('SET NULL');
    table
      .integer('fiscal_year_id')
      .unsigned()
      .references('id')
      .inTable('fiscal_years')
      .onDelete('SET NULL');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at');
    table.timestamp('deleted_at');

    table
      .integer('created_by')
      .unsigned()
      .references('id')
      .inTable('employees')
      .onDelete('SET NULL');
    table
      .integer('deleted_by')
      .unsigned()
      .references('id')
      .inTable('employees')
      .onDelete('SET NULL');
    table
      .integer('updated_by')
      .unsigned()
      .references('id')
      .inTable('employees')
      .onDelete('SET NULL');
  });
}

/**
 * Drop table leave_balances.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLE_NAME);
}
