import { Knex } from 'knex';
import { UserRole } from '../interfaces/userRole';

class UserRoleModel {
  constructor(private readonly knex: Knex) {}

  async assignRole(userRole: UserRole): Promise<number[]> {
    return this.knex('users_roles').insert(userRole);
  }

  async removeRole(employee_id: number, role_id: number): Promise<number> {
    return this.knex('users_roles').where({ employee_id, role_id }).delete();
  }

  async fetchUserRoles(employee_id: number): Promise<UserRole[]> {
    return this.knex('users_roles').where({ employee_id }).select('*');
  }
}

export default UserRoleModel;
