import jwt from 'jsonwebtoken';
import {
  findByEmail,
  invalidateToken,
  findByToken,
  findById,
  registerUser
} from '../models/user';
import { validatePassword } from '../utils/password';
import { createAccessToken, createRefreshToken } from '../utils/jwt';
import { User } from '../interfaces/user';

export async function login(
  email: string,
  password: string
): Promise<{ accessToken: string; refreshToken: string }> {
  const user = await findByEmail(email);

  if (!user || !validatePassword(password, user.password)) {
    throw new Error('Invalid credentials');
  }

  const accessToken = createAccessToken(user);
  const refreshToken = createRefreshToken(user);

  return { accessToken, refreshToken };
}

export async function createUser(userDetails: User): Promise<number> {
  const { email } = userDetails;
  const user = await findByEmail(email);

  if (user) {
    throw new Error('User already exists');
  }

  const userId = await registerUser(userDetails);

  return userId;
}

export async function logout(refreshToken: string): Promise<void> {
  try {
    const token = await findByToken(refreshToken);
    if (!token) {
      throw new Error('Refresh token not found');
    }

    await invalidateToken(token.id);
  } catch (error) {
    throw new Error('Failed to logout');
  }
}

export function refreshAccessToken(refreshToken: string): string {
  let payload: any = null;

  try {
    payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);
  } catch (err) {
    throw new Error('Invalid refresh token');
  }

  // Token is valid, check if user exists in database (optional)
  const user = findById(payload.userId);

  if (!user) {
    throw new Error('User not found');
  }

  // Generate new access token
  const accessToken = createAccessToken(user);

  return accessToken;
}
