import * as Express from 'express';
import * as Http from 'http';

export function createServer(port: number = 8000) {
  const app = Express();
  return Http.createServer(app);
}
