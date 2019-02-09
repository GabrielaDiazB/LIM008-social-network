import { checkInFunction, singInFunction, logOut, getUserPostData,
         deletePost, updatePost} from './controller-function/function-firebase.js';

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
    displayName: nameUser,
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
  const contentPost = document.querySelector('#text-area');
  getUserPostData(contentPost.value)
  .then(() => {})
  .catch(() => {})
};

export const deletePostOnSubmit = (objPost) => { 
  if(confirm('estas recontra segur de eliminar...'))
  if(confirm('seguro seguro seguro muy seguro muy pero muy seguro')) 
  if(confirm('alerta alerta alerta alerta se esta eliminando.........!!!!!!!!!!')){
   return deletePost(objPost.id);
  }
}

export const updatePostSubmit = (objPost, content) => {
  return updatePost(objPost, content);
};



export const logOutOnSubmit = () => {
  logOut()
    .then(() => {
      window.location.hash = '#/signIn';
    })
    .catch(() => { });
};

