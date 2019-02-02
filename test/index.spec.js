const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

import { registerLogIn } from '../src/lib/firebase-functions.js';
describe('Registro con email y password', () => {
  it('debería poder registrarse con email y password', () => {
    return registerLogIn('correo@1245.com', 'olasdelmar')
      .then((user => {
        expect(user.email).toBe('correo@1245.com');
      }));
  });
});
