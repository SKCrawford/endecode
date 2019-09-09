import { NextFunction, Request, Response } from 'express';

import { decrypt, encrypt } from './crypto';

export class Controller {
  public async encrypt(req: Request, res: Response, next: NextFunction) {
    const { key, message } = req.body;

    try {
      const encrypted = await encrypt(message, key)
      res.status(200).send({ message: encrypted });
    } catch (err) {
      next(err);
    }
  }

  public async decrypt(req: Request, res: Response, next: NextFunction) {
    const { key, message } = req.body;

    try {
      const decrypted = await decrypt(message, key)
      res.status(200).send({ message: decrypted });
    } catch (err) {
      next(err);
    }
  }
}
