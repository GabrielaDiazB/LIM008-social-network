import { 
  checkInFunction, 
  singInFunction,
  logOut, 
  userLogged} from '../controller-function/function-login.js';


// controler de crear una cuenta nueva
export const checkInOnSubmit = () => {
  const displayName = document.querySelector('#user-name').value;
  const information = document.querySelector('#information').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const firestore = firebase.firestore();
  let nameUser = displayName;
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
      data.uid = firebase.auth().currentUser.uid;
      users.add(data);
      window.location.hash = '#/signIn';
    })
    .catch((error) => {
      alert(error + 'llena los campos vacios');
    });
};

// controler de iniciar sesion
export const signInOnSubmit = () => {
  const userEmail = document.querySelector('#email-si').value;
  const userPassword = document.querySelector('#password-si').value;
  singInFunction(userEmail, userPassword)
    .then((user) => { 
      userLogged(user);
      changeHash('/profile');
    })
    .catch((error) => {
      alert(error + 'llena los campos vacios');
      window.location.hash = '#/signIn';
    });
};

export const logOutOnSubmit = () => {
  logOut()
    .then(() => {
      console.log('cerro sesion');
      window.location.hash = '#/signIn';
    });
};

export const idUser = () => 
  firebase.auth().currentUser.uid;

export const getNameUser = () => 
  firebase.auth().currentUser.displayName;

export const getPhotoUser = () => { 
  return firebase.auth().currentUser.photoURL;
};