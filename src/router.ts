import { Router } from 'express';

import { Controller } from './controller';

const controller = new Controller();

export const router = Router()
  .post('/encrypt', controller.encrypt)
  .post('/decrypt', controller.decrypt);
