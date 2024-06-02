import express from 'express';
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
import { assignRole, removeRole } from '../controllers/userRole';
import {
  assignPermission,
  removePermission
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

// Role permission routes
router.post('/role-permissions', assignPermission);
router.delete('/role-permissions', removePermission);

export default router;
