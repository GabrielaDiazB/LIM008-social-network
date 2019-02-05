import {checkInFunction, singInFunction, logOut} from './controller-function/function-firebase.js';

export const checkInOnSubmit = () => { 
  const name = document.querySelector('#user-name').value;
  const information = document.querySelector('#information').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const firestore = firebase.firestore();
  let nameUser = name;
  let emailRef = email;
  let users = firestore.collection('users');
  let data = {
    name: nameUser,
    information: informationUser,
    email: emailRef,
    password: passwordRef
  };
  
  checkInFunction(email, password)
      .then(() => {data.userId = firebase.auth().currentUser.uid;
        users.add(data);
        window.location.hash = '#/signIn';
      })
      .catch((err) => {
      console.error(err);
    });
  }
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
  document.getElementById('header-container').style.display = 'none';
  document.getElementById('footer-container').style.display = 'none';
  logOut()
    .then(() => { 
      window.location.hash = '#/signIn';
    })
    .catch(() => {});
};

