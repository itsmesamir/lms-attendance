import { Knex } from 'knex';
import { Role } from '../interfaces/role';

class RoleModel {
  constructor(private readonly knex: Knex) {}

  async createRole(role: Role): Promise<number[]> {
    return this.knex('roles').insert(role);
  }

  async getRoles(): Promise<Role[]> {
    return this.knex('roles').select('*');
  }

  async updateRole(id: number, role: Partial<Role>): Promise<number> {
    return this.knex('roles').where({ id }).update(role);
  }

  async deleteRole(id: number): Promise<number> {
    return this.knex('roles').where({ id }).update({ deleted_at: new Date() });
  }
}

export default RoleModel;
