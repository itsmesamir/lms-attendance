import { Knex } from 'knex';

const TABLE_NAME = 'permissions';

/**
 * Seed data for permissions.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del();
  await knex(TABLE_NAME).insert([
    { name: 'view_users', description: 'Permission to view users' },
    { name: 'create_users', description: 'Permission to create users' },
    { name: 'edit_users', description: 'Permission to edit users' },
    { name: 'delete_users', description: 'Permission to delete users' },
    { name: 'view_roles', description: 'Permission to view roles' },
    { name: 'create_roles', description: 'Permission to create roles' },
    { name: 'edit_roles', description: 'Permission to edit roles' },
    { name: 'delete_roles', description: 'Permission to delete roles' },
    {
      name: 'view_leave_requests',
      description: 'Permission to view leave requests'
    },
    {
      name: 'create_leave_requests',
      description: 'Permission to create leave requests'
    },
    {
      name: 'edit_leave_requests',
      description: 'Permission to edit leave requests'
    },
    {
      name: 'delete_leave_requests',
      description: 'Permission to delete leave requests'
    },
    {
      name: 'approve_leave_requests',
      description: 'Permission to approve leave requests'
    },
    {
      name: 'reject_leave_requests',
      description: 'Permission to reject leave requests'
    },
    {
      name: 'view_leave_balances',
      description: 'Permission to view leave balances'
    },
    {
      name: 'edit_leave_balances',
      description: 'Permission to edit leave balances'
    },
    {
      name: 'view_leave_notifications',
      description: 'Permission to view leave notifications'
    },
    {
      name: 'edit_leave_notifications',
      description: 'Permission to edit leave notifications'
    },
    {
      name: 'view_leave_carry_overs',
      description: 'Permission to view leave carry overs'
    },
    {
      name: 'edit_leave_carry_overs',
      description: 'Permission to edit leave carry overs'
    },
    { name: 'view_dashboard', description: 'Permission to view dashboard' },
    { name: 'view_reports', description: 'Permission to view reports' }
  ]);
}
