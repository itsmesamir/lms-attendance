import PermissionModel from '../models/permission';
import { Permission } from '../interfaces/permission';

class PermissionService {
  constructor(private readonly permissionModel: PermissionModel) {}

  async createPermission(permission: Permission): Promise<number[]> {
    return this.permissionModel.createPermission(permission);
  }

  async getPermissions(): Promise<Permission[]> {
    return this.permissionModel.getPermissions();
  }

  async updatePermission(
    id: number,
    permission: Partial<Permission>
  ): Promise<number> {
    return this.permissionModel.updatePermission(id, permission);
  }

  async deletePermission(id: number): Promise<number> {
    return this.permissionModel.deletePermission(id);
  }
}

export default PermissionService;
