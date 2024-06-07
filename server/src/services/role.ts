import RoleModel from '../models/role';
import { Role } from '../interfaces/role';
import { withNameSpace } from '../utils/logger';

const logger = withNameSpace('services/role');

class RoleService {
  constructor(private readonly roleModel: RoleModel) {}

  async createRole(role: Role): Promise<number[]> {
    logger.info(`Creating role with name: ${role.name}`);
    try {
      const createdRole = await this.roleModel.createRole(role);
      logger.info(`Role with name: ${role.name} created successfully`);
      return createdRole;
    } catch (error) {
      logger.error(`Error creating role with name: ${role.name}`);
      throw error;
    }
  }

  async getRoles(): Promise<Role[]> {
    logger.info('Fetching all roles');
    try {
      const roles = await this.roleModel.getRoles();
      logger.info('Roles fetched successfully');
      return roles;
    } catch (error) {
      logger.error('Error fetching roles');
      throw error;
    }
  }

  async updateRole(id: number, role: Partial<Role>): Promise<number> {
    logger.info(`Updating role with id: ${id}`);

    try {
      const updatedRole = await this.roleModel.updateRole(id, role);
      logger.info(`Role with id: ${id} updated successfully`);
      return updatedRole;
    } catch (error) {
      logger.error(`Error updating role with id: ${id}`);
      throw error;
    }
  }

  async deleteRole(id: number): Promise<number> {
    logger.info(`Deleting role with id: ${id}`);
    try {
      const deletedRole = await this.roleModel.deleteRole(id);
      logger.info(`Role with id: ${id} deleted successfully`);
      return deletedRole;
    } catch (error) {
      logger.error(`Error deleting role with id: ${id}`);
      throw error;
    }
  }
}

export default RoleService;
