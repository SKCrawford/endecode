import { Router } from 'express';

import { Controller } from './controller';

const controller = new Controller();

export const router = Router()
  .use(controller.validateBody)
  .use(controller.hashKey)
  .post('/encrypt', controller.encrypt)
  .post('/decrypt', controller.decrypt);
