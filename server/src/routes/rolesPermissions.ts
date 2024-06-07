import * as express from 'express';
import {
  createRole,
  getRoles,
  updateRole,
  deleteRole
} from '../controllers/role';
import {
  createPermission,
  getPermissions,
  updatePermission,
  deletePermission
} from '../controllers/permission';
import {
  assignRole,
  removeRole,
  fetchUserRoles
} from '../controllers/userRole';
import {
  assignPermission,
  removePermission,
  fetchRolePermissions,
  fetchPermissionsByUserId
} from '../controllers/rolePermission';

const router = express.Router();

// Role routes
router.post('/roles', createRole);
router.get('/roles', getRoles);
router.put('/roles/:id', updateRole);
router.delete('/roles/:id', deleteRole);

// Permission routes
router.post('/permissions', createPermission);
router.get('/permissions', getPermissions);
router.put('/permissions/:id', updatePermission);
router.delete('/permissions/:id', deletePermission);

// User role routes
router.post('/user-roles', assignRole);
router.delete('/user-roles', removeRole);
router.get('/user-roles/:employee_id', fetchUserRoles);

// Role permission routes
router.post('/role-permissions', assignPermission);
router.delete('/role-permissions', removePermission);
router.get('/role-permissions/:role_id', fetchRolePermissions);

// Fetch permissions by user ID
router.get('/user-permissions/:employee_id', fetchPermissionsByUserId);

export default router;
