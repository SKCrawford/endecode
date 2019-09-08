import * as Crypto from 'crypto-js';

/** Decrypt a message that was encrypted with the key. */
export async function decrypt(message: string, key: string) {
  const bytes = Crypto.AES.decrypt(message, key);
  return bytes.toString(Crypto.enc.Utf8);
}

/** Encrypt a message with the key. */
export async function encrypt(message: string, key: string) {
  return Crypto.AES.encrypt(message, key).toString();
}
