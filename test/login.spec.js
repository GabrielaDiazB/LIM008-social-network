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
  registerFacebookLogIn, 
  registerGoogleLogIn, 
  registerTwitterLogIn,
  checkInFunction,
  singInFunction
} from '../src/controller-function/function-firebase.js';

describe('Create an account with email and password', () => {
  it('debería poder crear una cuenta', () => {
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
  it('debería poder iniciar sesión con Facebook', () => {
    return registerFacebookLogIn().then((result) => {
      expect(typeof result).toBe('object');
    });
  });
});

describe('Google authentication', () => {
  it('debería ser una función', () => {
    expect(typeof registerGoogleLogIn).toBe('function');
  });
  it('debería poder iniciar sesión con Facebook', () => {
    return registerGoogleLogIn().then((result) => {
      expect(typeof result).toBe('object');
    });
  });
});

describe('Twitter authentication', () => {
  it('debería ser una función', () => {
    expect(typeof registerTwitterLogIn).toBe('function');
  });
  it('debería poder iniciar sesión con Facebook', () => {
    return registerTwitterLogIn().then((result) => {
      expect(typeof result).toBe('object');
    });
  });
});

describe('logOutUser', () => {
  it('debería ser una función', () => {
    expect(typeof (logOut)).toBe('function');
  });
  it('debería poder cerrar sesión', () => {
    return logOut();
  });
});