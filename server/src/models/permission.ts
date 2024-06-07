import { Knex } from 'knex';
import { Permission } from '../interfaces/permission';

class PermissionModel {
  constructor(private readonly knex: Knex) {}

  async createPermission(permission: Permission): Promise<number[]> {
    return this.knex('permissions').insert(permission);
  }

  async getPermissions(): Promise<Permission[]> {
    return this.knex('permissions').select('*');
  }

  async updatePermission(
    id: number,
    permission: Partial<Permission>
  ): Promise<number> {
    return this.knex('permissions').where({ id }).update(permission);
  }

  async deletePermission(id: number): Promise<number> {
    return this.knex('permissions')
      .where({ id })
      .update({ deleted_at: new Date() });
  }
}

export default PermissionModel;
