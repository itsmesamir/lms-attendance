import { Knex } from 'knex';

const TABLE_NAME = 'leave_types';

/**
 * Create table leave_types.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table
      .integer('country_id')
      .unsigned()
      .references('id')
      .inTable('countries')
      .onDelete('SET NULL');
    table.boolean('is_transferable').defaultTo(true);
    table.integer('transferable_days');
    table.integer('expiry_days');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at');
    table.timestamp('deleted_at');

    table
      .integer('created_by')
      .unsigned()
      .references('id')
      .inTable('employees');
    table
      .integer('deleted_by')
      .unsigned()
      .references('id')
      .inTable('employees');
    table
      .integer('updated_by')
      .unsigned()
      .references('id')
      .inTable('employees');
  });
}

/**
 * Drop table leave_types.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLE_NAME);
}
