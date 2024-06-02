import db from '../db.js';
import { withNameSpace } from '../utils/logger';
import TokenError from '../errors/TokenError';
import BadRequestError from '../errors/BadRequestError';
import { getFromStore } from '../asyncStore';

const logger = withNameSpace('services/employee');

export const createRole = async (roleData) => {
  try {
    const [roleId] = await db('roles').insert(roleData);
    return await db('roles').where({ id: roleId }).first();
  } catch (error) {
    logger.error('Error creating role:', error);
    throw error;
  }
};

export const getRoles = async () => {
  try {
    return await db('roles').select('*');
  } catch (error) {
    logger.error('Error getting roles:', error);
    throw error;
  }
};

export const updateRole = async (id, roleData) => {
  try {
    await db('roles').where({ id }).update(roleData);
    return await db('roles').where({ id }).first();
  } catch (error) {
    logger.error(`Error updating role with ID ${id}:`, error);
    throw error;
  }
};

export const deleteRole = async (id) => {
  try {
    await db('roles').where({ id }).del();
  } catch (error) {
    logger.error(`Error deleting role with ID ${id}:`, error);
    throw error;
  }
};
