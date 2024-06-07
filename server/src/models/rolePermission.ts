import { Knex } from 'knex';
import { RolePermission } from '../interfaces/rolePermission';
import { Employee } from '../interfaces/employee';

class RolePermissionModel {
  constructor(private readonly knex: Knex) {}

  async assignPermission(rolePermission: RolePermission): Promise<number[]> {
    return this.knex('roles_permissions').insert(rolePermission);
  }

  async removePermission(
    role_id: number,
    permission_id: number
  ): Promise<number> {
    return this.knex('roles_permissions')
      .where({ role_id, permission_id })
      .delete();
  }

  async fetchRolePermissions(role_id: number): Promise<RolePermission[]> {
    return this.knex('roles_permissions').where({ role_id }).select('*');
  }

  async fetchPermissionsByUserId(employee_id: number): Promise<any> {
    const userInfo = await this.knex<Employee>('employees')
      .select('id as employee_id', 'first_name', 'last_name', 'email')
      .where('id', employee_id)
      .first();

    const roles = await this.knex('users_roles as ur')
      .select('r.name')
      .leftJoin('roles as r', 'ur.role_id', 'r.id')
      .where('ur.employee_id', employee_id);

    const permissions = await this.knex('users_roles as ur')
      .select('p.name')
      .leftJoin('roles_permissions as rp', 'ur.role_id', 'rp.role_id')
      .leftJoin('permissions as p', 'rp.permission_id', 'p.id')
      .where('ur.employee_id', employee_id);

    return {
      employee: userInfo,
      roles: roles.map((role: any) => role.name),
      permissions: permissions.map((permission: any) => permission.name)
    };
  }
}

export default RolePermissionModel;
