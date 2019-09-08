import { Router } from 'express';

import { decrypt, encrypt } from './crypto';

export const router = Router()
  .post('/encrypt', (req, res, next) => {
    const { key, message } = req.body;

    encrypt(message, key)
      .then(encrypted => {
        res.status(200).send({ message: encrypted });
      })
      .catch(err => {
        console.error(err);
      });
  })
  .post('/decrypt', (req, res, next) => {
    const { key, message } = req.body;

    decrypt(message, key)
      .then(decrypted => {
        res.status(200).send({ message: decrypted });
      })
      .catch(err => {
        console.error(err);
      });
  });
