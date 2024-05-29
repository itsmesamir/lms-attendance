import AuthenticatedRequest from '../interfaces/AuthenticatedRequest';
import { Request, Response, NextFunction } from 'express';
import { User } from '../interfaces/user';
import { verifyAccessToken } from '../utils/jwt';

export const authenticate = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  // const token = req?.cookies?.accessToken;
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = verifyAccessToken(token);
    req.user = decoded as User;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
