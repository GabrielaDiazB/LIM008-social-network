import {
  checkInOnSubmit,
  signInOnSubmit,
  addPostOnSubmit,
  logOutOnSubmit,
  deletePostOnSubmit,
  updatePostSubmit

} from '../view-controller.js';

import {
  registerFacebookLogIn,
  registerGoogleLogIn,
  userLogged,
} from '../controller-function/function-firebase.js';

import { templateBarraNav } from './template-sections.js';

export const signIn = () => {
  const templateSignIn = `
  <img src="./logo/Nombre.png" alt="logo" class="logoname-img">
      <div id="signin-container" class="signin-container">
        <p class="logotipo">"Bla bla bla bla bla bla bla"</p>
        <div id="sign-in-box" class="container-login">
          <form>
            <input id="email-si" class="email" type="email" placeholder="Correo">
            <input id="password-si" class="password" type="password" placeholder="Contraseña">
            <button id="sign-in" class="login-btn" type="button">iniciar sesion</button>
          </form>
          <h2>Ingresa directamente con:</h2>
          <button id="facebook-login" class="fa fa-facebook"></button>
          <button id="google-login" class="fa fa-google"></button>
          <button id="twitter-login" class="fa fa-twitter"></button>
        </div>
        <div>
          <h4 id="signup-question" class="signup-question">¿No tienes una cuenta?</h4>
        </div>
      </div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = templateSignIn;
  const btnSignIn = divElem.querySelector('#sign-in');
  btnSignIn.addEventListener('click', () => {
    userLogged();
    signInOnSubmit();
  });

  const btnFacebook = divElem.querySelector('#facebook-login');
  btnFacebook.addEventListener('click', () => {
    registerFacebookLogIn();
  });

  const btnGoogle = divElem.querySelector('#google-login');
  btnGoogle.addEventListener('click', () => {
    registerGoogleLogIn();
  });

  const btnTwitter = divElem.querySelector('#twitter-login');
  btnTwitter.addEventListener('click', () => {
    registerTwitterLogIn();
  });

  const btnQuestion = divElem.querySelector('#signup-question');
  btnQuestion.addEventListener('click', () => {
    window.location.hash = '#/register';
  });
  return divElem;
};

export const register = () => {
  const templateRegister = `
      <div class="signup-container" id="sign-up-box">
          <form>
          <h2>Regístrate</h2>  
          <input id="user-name" class="user-name" type="text" placeholder="Nombre">
          <input id="information" class="information" type="text" placeholder="Cuéntanos tus Hobbies">
          <input id="email" class="email" type="email" placeholder="E-mail">
          <input id="password" class="password" type="password" placeholder="Contraseña">
          <button id="sign-up" class="sign-up-btn">Crear Cuenta</button>
        </form>
     </div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = templateRegister;

  const btnRegister = divElem.querySelector('#sign-up');
  btnRegister.addEventListener('click', () => {
    checkInOnSubmit();
    window.location.hash = '#/signIn';
  });
  return divElem;
};

export const perfil = (data) => {
  const templatePerfil = `
  ${templateBarraNav}
      <div class="container">
        <div class="container-profile">
          <div class="ft-perfil">
            <img src= ${'http://florflores.com/wp-content/uploads/211-girasoles.jpg'} class="ft" alt="foto de perfil"/>
          </div>
        </div>
        <div class="container-information"> 
          <div class="information">
            <span class="name">${data.name}</span>
            <span class="info">${data.information}</span>
          </div>
          <div class = "table"> 
            <table>
              <tr>
                <th>#</th>
                <th>#</th>
              </tr>
              <tr>
                <td>Me encanta</td>
                <td>Favoritos</td>
              </tr>
           </table>    
          </div>        
        </div>
      </div>
    `;
  const divElem = document.createElement('div');
  divElem.setAttribute('class', 'perfil-container');
  divElem.innerHTML = templatePerfil;

  const logOutBtn = divElem.querySelector('#log-out-btn');
  logOutBtn.addEventListener('click', () => {
    logOutOnSubmit();
  });

  return divElem;
};

export const writingPost = (objPost) => {
  const templateWritingPost = `
    ${templateBarraNav}
      <div class="post-container">
        <i class="fa fa-arrow-left"></i>
        <h1 class="text-align">¿Qué Recomiendas?</h1>
        <form>
          <div class="activity-filter">
              <label for="">Interior</label>
              <input type="checkbox" value="Inside">
              <label for="">Exterior</label>
              <input type="checkbox" value="Outside"> 
          </div>
          <textarea id="text-area" class="text-area" cols="25" rows="5" autofocus placeholder="Escribe aquí..." required></textarea>
          <div class="privacy-filter">
              <label for="">Público</label>
              <input id="privacy-checkbox" type="select" value="public">
              <label for="">Privado</label>
              <input id="privacy-checkbox" type="checkbox" value="private">
          </div>
          <button type="button" class="post" id="post">Publicar</button>
        </form>      
      </div>`;
  const post = document.createElement('div');
  post.innerHTML = templateWritingPost;

  const postingPost = post.querySelector('#post');
  postingPost.addEventListener('click', addPostOnSubmit);

  const ul = post.querySelector('.post-container');
  objPost.forEach(post => {
    ul.appendChild(itemPost(post));
  });

  return post;
};

const itemPost = (dataPost) => {
  const liElement = document.createElement('li');
  liElement.classList.add('mdl-list__item');
  liElement.innerHTML = `
    ${templateBarraNav}
      <div class="post-container-posted">
        <div class="settings-box">
          <img src="./aicon/edit.ico" alt="" class="img-icon-post" id="btn-update-${dataPost.id}">
          <img src="./aicon/garbage-2.png" alt="" id="btn-delete-${dataPost.id}" class="img-icon-post">
        </div>
        <form>
          <div id="user-box" class="user-box">
                <img src="./aicon/user-2.png" alt="" id="user-pic-post" class="user-pic">
                <h2 id="user-name" class="user-name-post">${dataPost.name}</h2>
                <h5><${dataPost.date}/h5>
          </div> 
          <textarea id="post-edit-${dataPost.id}" class="text-area" cols="25" rows="5" disabled>${dataPost.content}</textarea>
          <div class="privacy-box">
            <i class="fa fa-unlock" class="img-icon-post"></i>
            <i class="fa fa-lock" class="img-icon-post"></i>
          </div>
          <div class="interact-box">
            <label for="" class="click-counter-likes">2</label>
            <img src="./aicon/like-2.png" alt="" class="img-icon-post">
            <label for="" class="click-counter-favorites"> 2</label>
            <img  src="./aicon/star-1.png" alt="" class="img-icon-post">
          </div> 
          <button id="save-post-edit" class="save-post-edit" type="button">Guardar</button>
        </form>      
      </div>`;
  const editBtn = liElement.querySelector(`#btn-update-${dataPost.id}`);
  const textArea = liElement.querySelector(`#post-edit-${dataPost.id}`);
  editBtn.addEventListener('click', () => {
    textArea.disabled = false;
    liElement.querySelector('#save-post-edit').style.display = 'block';
  });
      
  const saveEdit = liElement.querySelector('#save-post-edit');
  saveEdit.addEventListener('click', () => {
    textArea.disabled = true;
    updatePostSubmit(dataPost.id, textArea.value);
  });

  const deleted = liElement.querySelector(`#btn-delete-${dataPost.id}`);
  deleted.addEventListener('click', () => {
    deletePostOnSubmit(dataPost);
  });

  return liElement;
};