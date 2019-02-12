
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
  registerFacebookLogIn,
  registerGoogleLogIn,
  registerTwitterLogIn,
  logOut
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
});

describe('Facebook authentication', () => {
  it('debería ser una función', () => {
    expect(typeof registerFacebookLogIn).toBe('function');
  });
});

describe('Google authentication', () => {
  it('debería ser una función', () => {
    expect(typeof registerGoogleLogIn).toBe('function');
  });
});

describe('Twitter authentication', () => {
  it('debería ser una función', () => {
    expect(typeof registerTwitterLogIn).toBe('function');
  });
});


describe('cerrar sesion', () => {
  it('deberia cerrar sesion', () => {
    return logOut()
      .then((user) => { 
        expect(user).toBe(undefined);
      });
  });
});

