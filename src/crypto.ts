import * as Crypto from 'crypto-js';

import { SALT } from './config';

/** Decrypt a message that was encrypted with the key. */
export async function decrypt(message: string, key: string) {
  const bytes = Crypto.AES.decrypt(message, key);
  return bytes.toString(Crypto.enc.Utf8);
}

/** Encrypt a message with the key. */
export async function encrypt(message: string, key: string) {
  return Crypto.AES.encrypt(message, key).toString();
}

/** Given a raw string and an optional salt, hash it. Salt defaults to the global config salt. */
export async function hash(raw: string, salt: string = SALT) {
  return Crypto.HmacMD5(raw, salt).toString(Crypto.enc.Base64);
}
