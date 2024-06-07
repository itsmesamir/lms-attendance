import RolePermissionModel from '../models/rolePermission';
import * as EmployeeService from './employee';
import { RolePermission, UserPermission } from '../interfaces/rolePermission';
import { withNameSpace } from '../utils/logger';
import { getFromStore } from '../asyncStore';

class RolePermissionService {
  constructor(
    private readonly rolePermissionModel: RolePermissionModel,
    private readonly logger = withNameSpace('services/rolePermission')
  ) {}

  async assignPermission(rolePermission: RolePermission): Promise<number[]> {
    this.logger.info(
      `Assigning permission with id: ${rolePermission.permission_id} to role with id: ${rolePermission.role_id}`
    );
    try {
      const assignedPermission =
        await this.rolePermissionModel.assignPermission(rolePermission);
      this.logger.info(
        `Permission with id: ${rolePermission.permission_id} assigned to role with id: ${rolePermission.role_id}`
      );
      return assignedPermission;
    } catch (error) {
      this.logger.error(
        `Error assigning permission with id: ${rolePermission.permission_id} to role with id: ${rolePermission.role_id}`
      );
      throw error;
    }
  }

  async removePermission(
    role_id: number,
    permission_id: number
  ): Promise<number> {
    try {
      const removedPermission = await this.rolePermissionModel.removePermission(
        role_id,
        permission_id
      );
      this.logger.info(
        `Permission with id: ${permission_id} removed from role with id: ${role_id}`
      );
      return removedPermission;
    } catch (error) {
      this.logger.error(
        `Error removing permission with id: ${permission_id} from role with id: ${role_id}`
      );
      throw error;
    }
  }

  async fetchRolePermissions(role_id: number): Promise<RolePermission[]> {
    this.logger.info(`Fetching permissions for role with id: ${role_id}`);

    try {
      const rolePermissions =
        await this.rolePermissionModel.fetchRolePermissions(role_id);
      this.logger.info(
        `Permissions fetched successfully for role with id: ${role_id}`
      );
      return rolePermissions;
    } catch (error) {
      this.logger.error(
        `Error fetching permissions for role with id: ${role_id}`
      );
      throw error;
    }
  }

  public async fetchPermissionsByUserId(
    employee_id: number
  ): Promise<UserPermission> {
    const userPermissions = getFromStore<UserPermission[]>('userPermission');
    console.log('userPermissions', userPermissions);
    this.logger.info(`Fetching permissions for user with id: ${employee_id}`);

    const userExists = await EmployeeService.fetchEmployeeById(employee_id);

    if (!userExists) {
      this.logger.error(`User with id: ${employee_id} not found`);
      throw new Error(`User with id: ${employee_id} not found`);
    }

    try {
      const permissions =
        await this.rolePermissionModel.fetchPermissionsByUserId(employee_id);
      this.logger.info(
        `Permissions fetched successfully for user with id: ${employee_id}`
      );
      return permissions;
    } catch (error) {
      this.logger.error(
        `Error fetching permissions for user with id: ${employee_id}`
      );
      throw error;
    }
  }
}

export default RolePermissionService;
