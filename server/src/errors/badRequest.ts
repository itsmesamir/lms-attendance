import BaseError from './baseError';
import HttpStatus from 'http-status-codes';

class BadRequestError extends BaseError {
  constructor(
    message: string = HttpStatus.getStatusText(HttpStatus.BAD_REQUEST)
  ) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}

export default BadRequestError;
