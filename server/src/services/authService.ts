import jwt from 'jsonwebtoken';
import {
  findByEmail,
  invalidateToken,
  findByToken,
  findById,
  registerUser
} from '../models/user';
import { hashPassword, validatePassword } from '../utils/password';
import { createAccessToken, createRefreshToken } from '../utils/jwt';
import { User } from '../interfaces/user';
import { withNameSpace } from '../utils/logger';

const logger = withNameSpace('services/authService');

export async function login(
  email: string,
  password: string
): Promise<{ accessToken: string; refreshToken: string }> {
  logger.info(`Login attempt for user with email: ${email}`);
  const user = await findByEmail(email);

  if (!user) {
    throw new Error('User not found');
  }

  const isValidPassword = await validatePassword(password, user.password);
  if (!isValidPassword) {
    throw new Error('Invalid password');
  }

  logger.info(`User with email: ${email} successfully logged in`);

  const accessToken = createAccessToken(user);
  const refreshToken = createRefreshToken(user);

  logger.info(`Tokens generated for user with email: ${email}`);

  return { accessToken, refreshToken };
}

export async function createUser(userDetails: User): Promise<number> {
  logger.info(`Registering user with email: ${userDetails.email}`);

  const { email } = userDetails;
  const user = await findByEmail(email);

  logger.info(`User with email: ${email} already exists`);

  if (user) {
    throw new Error('User already exists');
  }

  // hash password before saving
  userDetails.password = await hashPassword(userDetails.password);

  const userId = await registerUser(userDetails);

  logger.info(`User with email: ${email} registered successfully`);

  return userId;
}

export async function logout(refreshToken: string): Promise<void> {
  try {
    logger.info(`Logging out user with refresh token: ${refreshToken}`);

    const token = await findByToken(refreshToken);
    if (!token) {
      throw new Error('Refresh token not found');
    }

    logger.info(`Invalidating token with id: ${token.id}`);
    await invalidateToken(token.id);

    logger.info(
      `User with refresh token: ${refreshToken} logged out successfully`
    );
  } catch (error) {
    logger.error(`Failed to logout user with refresh token: ${refreshToken}`);
    throw new Error('Failed to logout');
  }
}

export function refreshAccessToken(refreshToken: string): string {
  let payload: any = null;

  try {
    logger.info(
      `Refreshing access token for user with refresh token: ${refreshToken}`
    );
    payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);
  } catch (err) {
    logger.error(
      `Failed to refresh access token for user with refresh token: ${refreshToken}`
    );
    throw new Error('Invalid refresh token');
  }

  // Token is valid, check if user exists in database (optional)
  const user = findById(payload.userId);

  logger.info(`User with refresh token found`);

  if (!user) {
    throw new Error('User not found');
  }

  // Generate new access token
  const accessToken = createAccessToken(user);

  logger.info(`Access token refreshed for user with refresh token.`);

  return accessToken;
}
