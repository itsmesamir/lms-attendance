import { Request } from 'express';

import { User } from './user';
interface AuthenticatedRequest extends Request {
  user?: User;
  currentUser?: User;
  query: any;
}

export default AuthenticatedRequest;
