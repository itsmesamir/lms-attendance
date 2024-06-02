// app.ts
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

import { initializeStore } from './asyncStore';
const router = express.Router();

import routes from './routes/authRoutes';

const app = express();

// Middleware
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(initializeStore);

app.use('/api', routes);

export default app;
