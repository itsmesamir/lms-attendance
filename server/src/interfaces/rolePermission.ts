export interface RolePermission {
  id?: number;
  role_id: number;
  permission_id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export interface UserPermission {
  employee: {
    employee_id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
  roles: string[];
  permissions: string[];
}
