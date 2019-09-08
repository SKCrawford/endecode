import * as Express from 'express';
import * as Http from 'http';

import { PORT } from './config';
import { router } from './router';

export function createServer(port: number = PORT) {
  const app = Express();
  app.use(Express.urlencoded({ extended: true }));
  app.use(router);
  return Http.createServer(app);
}
