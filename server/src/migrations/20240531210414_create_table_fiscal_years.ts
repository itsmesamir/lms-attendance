import { Knex } from 'knex';

const TABLE_NAME = 'fiscal_years';

export function up(knex: Knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments('id').primary();
    table.date('start_date').notNullable();
    table.date('end_date').notNullable();
    table.boolean('is_current').defaultTo(false);
    table
      .integer('country_id')
      .unsigned()
      .references('id')
      .inTable('countries')
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

    // Add unique constraint
    table.unique(['country_id', 'start_date', 'end_date']);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable(TABLE_NAME);
}
