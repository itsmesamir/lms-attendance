import * as jwt from 'jsonwebtoken';
import { User } from '../interfaces/user';

const secret = process.env.JWT_SECRET_KEY || '';
const refreshSecret = process.env.JWT_REFRESH_SECRET_KEY!;

export const createAccessToken = (user: any) => {
  return jwt.sign({ userId: user.id }, secret, { expiresIn: '15h' });
};

export const createRefreshToken = (user: User) => {
  return jwt.sign({ userId: user.id }, refreshSecret, { expiresIn: '7d' });
};

export const verifyAccessToken = (token: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, refreshSecret);
};
