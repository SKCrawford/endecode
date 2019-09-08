import * as Express from 'express';
import * as Http from 'http';

import { PORT } from './config';

export function createServer(port: number = PORT) {
  const app = Express();
  return Http.createServer(app);
}
