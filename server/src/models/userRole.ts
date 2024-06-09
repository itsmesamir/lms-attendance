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

  async fetchUserRoles(employee_id: number): Promise<any> {
    const userInfo = await this.knex('employees')
      .select('id as employee_id', 'first_name', 'last_name', 'email')
      .where('id', employee_id)
      .first();

    const roles = await this.knex('users_roles as ur')
      .select('r.name')
      .leftJoin('roles as r', 'ur.role_id', 'r.id')
      .where('ur.employee_id', employee_id);

    return {
      employee: userInfo,
      roles: roles.map((role: any) => role.name)
    };
  }
}

export default UserRoleModel;
