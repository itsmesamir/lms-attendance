import { Knex } from 'knex';

const TABLE_NAME = 'leave_carry_over';

/**
 * Create table leave_carry_over.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments('id').primary();
    table
      .integer('from_fiscal_year_id')
      .unsigned()
      .references('id')
      .inTable('fiscal_years')
      .onDelete('SET NULL');
    table.boolean('is_carried_over').defaultTo(false);
    table.text('notes');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table
      .bigInteger('created_by')
      .references('id')
      .inTable('users')
      .onDelete('SET NULL');
  });
}

/**
 * Drop table leave_carry_over.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLE_NAME);
}
