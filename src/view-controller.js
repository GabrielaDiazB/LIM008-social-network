import { checkInFunction, singInFunction, logOut, getUserPostData} from './controller-function/function-firebase.js';

export const checkInOnSubmit = () => {
  const name = document.querySelector('#user-name').value;
  const information = document.querySelector('#information').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

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
      window.location.hash = '#/signIn';
    })
    .catch(() => {
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

export const addPostOnSubmit = () => {
  const contentPost = document.querySelector('#text-area').value;
  getUserPostData(contentPost);
  // window.location.hash = '#/wallPost';
  // .then((
  // swal('¡Genial!', 'Tu post se subió satisfactoriamente', 'success'))
  // .catch((err) => error => {
  //   console.error('Error adding document: ', error);
  // })
};

export const logOutOnSubmit = () => {
  logOut()
    .then(() => {
      window.location.hash = '#/signIn';
    })
    .catch(() => { });
};
