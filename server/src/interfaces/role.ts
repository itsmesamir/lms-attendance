export interface Role {
  id?: number;
  name: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  created_by?: number;
  updated_by?: number;
  deleted_by?: number;
}
