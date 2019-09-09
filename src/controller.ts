import { NextFunction, Request, Response } from 'express';

import { decrypt, encrypt, hash } from './crypto';

export class Controller {
  public async validateBody(req: Request, res: Response, next: NextFunction) {
    if (!req || !req.body || !req.body.key || !req.body.message) {
      throw new Error("Request body must contain fields 'key' and 'message'");
    }
    next();
  }

  /** 
   * By hashing the provided key with the env variable SALT, past messages
   * can be rendered effectively unreadable when desired.
   * */
  public async hashKey(req: Request, res: Response, next: NextFunction) {
    req.body.key = await hash(req.body.key);
    next();
  }

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
