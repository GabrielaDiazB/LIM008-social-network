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

import {
  checkInFunction,
  singInFunction,
} from '../src/controller-function/function-login.js';

describe('Create an account with email and password', () => {
  it('debería poder crear un usuario', () => {
    return checkInFunction('correofake@hotmail.com', '123456')
      .then((user) => {
        expect(user.email).toBe('correofake@hotmail.com');
      });
  });
});
describe('LogIn with email and password', () => {
  it('debería iniciar sesión', () => {
    return singInFunction('correofake@hotmail.com', '123456')
      .then((user) => {
        expect(user.email).toBe('correofake@hotmail.com');
      });
  });
  it('debería poder eliminar el post indicado', (done) => {
    return deletePostOnSubmit('abc123')
      .then(() => getPost(
        (data) => {
          const results = data.find((post) => post.id === 'abc123');
          expect(results).toBe(undefined);
          done();
        }
      ));
  }); 
});

/* describe('cerrar sesion', () => {
  it('deberia cerrar sesion', () => {
   expect(typeof logOut).toBe('null');
  })
})*/

