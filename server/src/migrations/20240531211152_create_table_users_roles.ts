import { Knex } from 'knex';

const TABLE_NAME = 'users_roles';

/**
 * Create table user_roles.
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
    table.integer('role_id').unsigned().notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('deleted_at');

    table.unique(['employee_id', 'role_id']);
  });
}

/**
 * Drop table user_roles.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLE_NAME);
}
