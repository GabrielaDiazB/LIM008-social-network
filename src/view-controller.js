import {checkInFunction, singInFunction, logOut, callDoc} from './controller-function/function-firebase.js';

export const checkInOnSubmit = () => { 
  const name = document.querySelector('#user-name').value;
  const information = document.querySelector('#information').value;
  const email = document.querySelector('#email').value;
  
  const firestore = firebase.firestore();
  let nameUser = name;
  let informationUser = information;
  let emailRef = email;
  let users = firestore.collection('users');
  let data = {
    name: nameUser,
    information: informationUser,
    email: emailRef,
  };
  checkInFunction(email, password)
    .then(() => {
      data.userId = firebase.auth().currentUser.uid;
      users.add(data);
      window.location.hash = '#/signIn'
        .catch(() => {});
    });
};

export const signInOnSubmit = () => { 
  const userEmail = document.querySelector('#email-si').value;
  const userPassword = document.querySelector('#password-si').value;
  singInFunction(userEmail, userPassword)
    .then(() => {
      window.location.hash = '#/perfil';
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


export const callDocSubmit = () => {
  /*.then((userInfo) => {
    console.log(userInfo);

  })*/
  return callDoc();
} 

