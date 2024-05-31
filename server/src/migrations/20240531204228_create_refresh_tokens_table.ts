import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('refresh_tokens', (table) => {
    table.increments('id').primary();
    table.string('token').notNullable();
    table.specificType('user_id', 'bigint(20)').notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.timestamp('expiry_time').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('invalidated_at').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('refresh_tokens');
}
