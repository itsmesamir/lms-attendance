import { Knex } from 'knex';

const TABLE_NAME = 'employees';

/**
 * Create table employees.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments('id').primary().unsigned();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').unique().notNullable();
    table
      .integer('department_id')
      .unsigned()
      .references('id')
      .inTable('departments')
      .onDelete('SET NULL');
    table.string('designation');
    table.string('address');
    table.string('contact_info');
    table
      .integer('manager_id')
      .unsigned()
      .references('id')
      .inTable(TABLE_NAME)
      .onDelete('SET NULL');
    table.string('gender');
    table.string('middle_name');
    table.date('birthday');
    table.date('join_date').notNullable();
    table
      .integer('country_id')
      .unsigned()
      .references('id')
      .inTable('countries')
      .onDelete('SET NULL');
    table.string('timezone');
    table.string('working_shift');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('deleted_at');

    table.bigInteger('created_by');
    table.bigInteger('deleted_by');
    table.bigInteger('updated_by');
  });
}

/**
 * Drop table employees.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLE_NAME);
}
