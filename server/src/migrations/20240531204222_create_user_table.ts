import { Knex } from 'knex';

const TABLE_NAME = 'users';

/**
 * Create table users.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.specificType('id', 'bigint(20) not null primary key auto_increment');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table
      .integer('employee_id')
      .unsigned()
      .unique()
      .references('id')
      .inTable('employees')
      .onDelete('SET NULL');
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('deleted_at');

    table.bigInteger('created_by').references('id').inTable(TABLE_NAME);
    table.bigInteger('deleted_by').references('id').inTable(TABLE_NAME);
    table.bigInteger('updated_by').references('id').inTable(TABLE_NAME);
  });
}

/**
 * Drop table users.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLE_NAME);
}
