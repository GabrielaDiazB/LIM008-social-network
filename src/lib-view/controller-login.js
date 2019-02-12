import { 
  checkInFunction, 
  singInFunction,
  logOut, 
  userLogged} from '../controller-function/function-login.js';

const changeHash = (hash) => {
  location.hash = hash;
};

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
      data.userId = firebase.auth().currentUser.uid;
      users.add(data);
      changeHash('/signIn');
    })
    .catch((error) => {
      alert(error + 'llena los campos vacios');
      changeHash('/register');
    });
};

// controler de iniciar sesion
export const signInOnSubmit = () => {
  const userEmail = document.querySelector('#email-si').value;
  const userPassword = document.querySelector('#password-si').value;
  singInFunction(userEmail, userPassword)
    .then((user) => { 
      userLogged(user);
      changeHash('/perfil');
    })
    .catch((error) => {
      alert(error + 'llena los campos vacios');
      changeHash('/signIn');
    });
};

export const logOutOnSubmit = () => {
  logOut()
    .then(() => {
      changeHash('/signIn');
    });
};

export const idUser = () => 
  firebase.auth().currentUser.uid;

export const getNameUser = () => 
  firebase.auth().currentUser.displayName;

export const getPhotoUser = () => { 
  return firebase.auth().currentUser.photoURL;
};