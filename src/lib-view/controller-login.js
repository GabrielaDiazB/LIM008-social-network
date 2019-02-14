import { 
  checkInFunction, 
  singInFunction,
  logOut, 
  userLogged} from '../controller-function/function-login.js';

// controller de crear cuenta nueva
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
      swal(error + 'LLena los campos vacíos');
      // swal('Atención','Por favor llena los espacios vacíos', 'error')
    });
};

// controller de inicio de sesión
export const signInOnSubmit = () => {
  const userEmail = document.querySelector('#email-si').value;
  const userPassword = document.querySelector('#password-si').value;
  singInFunction(userEmail, userPassword)
    .then((user) => { 
      userLogged(user);
      changeHash('/profile');
    })
    .catch((error) => {
      swal(error + 'LLena los campos vacíos');
      // swal('Atención','Por favor llena los espacios vacíos', 'error')
      window.location.hash = '#/signIn';
    });
};

// controller de cierre de sesión
export const logOutOnSubmit = () => {
  logOut()
    .then(() => {
      console.log('Cierre de sesión');
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