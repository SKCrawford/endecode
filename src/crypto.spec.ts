import { decrypt, encrypt } from './crypto';

describe('crypto', () => {
  const decryptedMessage = 'A test message 123';
  const encryptedMessage = 'U2FsdGVkX19RuXwXp4qSMN+a8ZQQkDJcYEod5MMfAiqNSRRueDKXolJIkv1aMo9R';
  const key = 'notsorandomtestkey';

  describe('encrypt', () => {
    it('encrypts a simple string', () => {
      encrypt(decryptedMessage, key)
        .then(msg => {
          expect(msg).toEqual(encryptedMessage);
        });
    })
  })

  describe('decrypt', () => {
    it('decrypts a simple string', () => {
      decrypt(decryptedMessage, key)
        .then(msg => {
          expect(msg).toEqual(decryptedMessage);
        });
    })
  })
});
