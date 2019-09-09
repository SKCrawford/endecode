import { decrypt, encrypt } from './crypto';

describe('crypto', () => {
  const decryptedMessage = 'A test message 123';
  const key = 'notsorandomtestkey';

  describe('encrypt', () => {
    it('encrypts a simple string', done => {
      encrypt(decryptedMessage, key)
        .then(msg => {
          expect(msg).not.toEqual(decryptedMessage);
          done();
        });
    })
  })

  describe('decrypt', () => {
    it('decrypts a simple string', done => {
      encrypt(decryptedMessage, key)
        .then(encMsg => {
          decrypt(encMsg, key)
            .then(decMsg => {
              expect(decMsg).toEqual(decryptedMessage);
              done();
            });
        });
    })
  })
});
