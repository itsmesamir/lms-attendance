import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { User } from '../interfaces/user';
import AuthenticatedRequest from '../interfaces/AuthenticatedRequest';

export const authenticate = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authorizationHeader = req.headers['authorization'];
  const token = authorizationHeader && authorizationHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    req.user = user as User;
    next();
  });
};
