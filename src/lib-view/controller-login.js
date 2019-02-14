import { 
  checkInFunction, 
  singInFunction,
  logOut, 
  registerGoogleLogIn,
  registerFacebookLogIn,
  registerTwitterLogIn
} from '../controller-function/function-login.js';


const changeHash = (hash) => {
  location.hash = hash;
};
  

// controler de crear una cuenta nueva
export const checkInOnClick = () => {
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
      changeHash('/sigIn');
    })
    .catch((error) => {
      alert(error + 'llena los campos vacios');
    });
};
// controler de iniciar sesion
export const signInOnClick = () => {
  const userEmail = document.querySelector('#email-si').value;
  const userPassword = document.querySelector('#password-si').value;
  singInFunction(userEmail, userPassword)
    .then((user) => { 
      changeHash('/profile');
    })
    .catch((error) => {
      alert(error + 'llena los campos vacios');
      changeHash('/signIn');
    });
};
export const facebookOnClick = () => {
  registerFacebookLogIn()
    .then((result) => {
      changeHash('/wall');
    })
    .catch((error) => { 
      alert(error);
    });
};

export const googleOnClick = () => {
  registerGoogleLogIn()
    .then((result) => {
      changeHash('/wall');
    })
    .catch((error) => { 
      alert(error);
    });
};
  
export const twitterOnClick = () => {
  registerTwitterLogIn()
    .then((result) => {
      changeHash('/wall');
    })
    .catch((error) => { 
      alert(error);
    });
};
    

export const logOutOnClick= () => { 
  logOut()
    .then((result) => {
      changeHash('/signIn');
    })
    .catch(() => {});
}

export const idUser = () => 
  firebase.auth().currentUser.uid;

export const getNameUser = () => 
  firebase.auth().currentUser.displayName;

export const getPhotoUser = () => { 
  return firebase.auth().currentUser.photoURL;
};