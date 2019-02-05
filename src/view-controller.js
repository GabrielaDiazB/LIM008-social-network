import {checkInFunction, singInFunction, logOut, callDoc} from './controller-function/function-firebase.js';

export const checkInOnSubmit = () => { 
  const name = document.querySelector('#user-name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const firestore = firebase.firestore();
  let nameUser = name;
  let emailRef = email;
  let passwordRef = password;
  let users = firestore.collection('users');
  let data = {
    name: nameUser,
    email: emailRef,
    password: passwordRef
  };
  checkInFunction(email, password);
  users.add(data)
    .then(() => { 
      data.userId = firebase.auth().currentUser.uid;
      users.add(data);
      window.location.hash = '#/signIn';
    })
    .catch((err) => {
      console.error(err);
    });
};

export const signInOnSubmit = () => {
  const userEmail = document.querySelector('#email-si').value;
  const userPassword = document.querySelector('#password-si').value;
  singInFunction(userEmail, userPassword)
    .then(() => {
    })
    .catch((error) => {
      alert(error);
    });
};


export const logOutOnSubmit = () => { 
  logOut()
    .then(() => { 
      window.location.hash = '#/signIn';
    })
    .catch(() => {});
};

export const callDocSubmit = () => {
  return callDoc();
}


