import { Request } from 'express';

import { User } from './user';
interface AuthenticatedRequest extends Request {
  user?: User;
  userId?: number;
  currentUser?: User;
  query: any;
}

export default AuthenticatedRequest;
