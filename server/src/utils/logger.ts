import winston from 'winston';

// Define the format for logging
const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// Create a Winston logger instance
const logger = winston.createLogger({
  format: winston.format.combine(winston.format.timestamp(), logFormat),
  transports: [
    new winston.transports.Console()
    // Add other transports if needed, e.g., file transport
    // new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    // new winston.transports.File({ filename: 'logs/combined.log' }),
  ]
});

// Create a stream for morgan (if you are using it for HTTP request logging)
export const stream = {
  write: (message: string) => {
    logger.info(message.trim());
  }
};

// Export logger instance
export default logger;
