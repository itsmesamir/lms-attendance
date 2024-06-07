import UserRoleModel from '../models/userRole';
import { UserRole } from '../interfaces/userRole';

class UserRoleService {
  constructor(private readonly userRoleModel: UserRoleModel) {}

  async assignRole(userRole: UserRole): Promise<number[]> {
    return this.userRoleModel.assignRole(userRole);
  }

  async removeRole(employee_id: number, role_id: number): Promise<number> {
    return this.userRoleModel.removeRole(employee_id, role_id);
  }

  async fetchUserRoles(employee_id: number): Promise<UserRole[]> {
    return this.userRoleModel.fetchUserRoles(employee_id);
  }
}

export default UserRoleService;
