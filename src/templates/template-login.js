import { 
  checkInOnSubmit,
  signInOnSubmit,
  logOutOnSubmit} from '../view-controller.js';

import {
  registerFacebookLogIn,
  registerGoogleLogIn,
  registerTwitterLogIn,
  userLogged
} from '../controller-function/function-firebase.js';

import {
  addPostOnSubmit,
} from '../controller-function/wall.js';
    
const templatesLogin = {   
  signIn: () => { 
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
    const btnSignIn = divElem.querySelector('#sign-in')
    btnSignIn.addEventListener('click', () => {
      userLogged();
      signInOnSubmit();
    });

    const btnFacebook = divElem.querySelector('#facebook-login')
    btnFacebook.addEventListener('click', () => {
      registerFacebookLogIn();
    });

    const btnGoogle = divElem.querySelector('#google-login')
    btnGoogle.addEventListener('click', () => {
      registerGoogleLogIn();
    });

    const btnTwitter = divElem.querySelector('#twitter-login')
    btnTwitter.addEventListener('click', () => { 
      registerTwitterLogIn();
    });

    const btnQuestion = divElem.querySelector('#signup-question')
    btnQuestion.addEventListener('click', () => {               
      window.location.hash = '#/register';
    });
    return divElem;
  },

  register: () => { 
    const templateRegister = `
      <div class="signup-container" id="sign-up-box">
      <form>
      <h2>Regístrate</h2>  
      <input id="user-name" class="user-name" type="text" placeholder="Nombre">
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
    });
    return divElem;
  },

  welcome: () => {
    const templateWelcome = `
    <header>
         <nav>
            <img src="./logo/Logo2.png" alt="logowhite" class="logo-img">
            <a href="#/signIn"><img src="aicon/exit-1.png" id="sign-out" class ="icon-header" alt=""></a>
         </nav>
      </header>

    <footer id="footer-container">
        <nav>
          <div class="footer">
            <a href="#/wallPost"><img src="aicon/home.png" class ="icon-footer" alt=""></a>
            <a href="#"><img src="aicon/search.png" class ="icon-footer" alt=""></a>
            <a href="#/writingPost"><img src="aicon/add-3.png" class ="icon-footer" alt=""></a>
            <a href="#/perfil"><img src="aicon/users-1.png" class ="icon-footer" alt=""></a>
          </div>
        </nav>
      </footer>`;
    const divElem = document.createElement('div');
    divElem.innerHTML = templateWelcome;

    const btnLogOut = divElem.querySelector('#sign-out');
    btnLogOut.addEventListener('click', () => { 
      logOutOnSubmit();              
    });
    return divElem; 
  },

  perfil: () => {
    const templatePerfil = `
      <div class="container">
         <div class="container-perfil">
         <div class="ft-perfil">
         <img src= ${'http://florflores.com/wp-content/uploads/211-girasoles.jpg'} class="ft" alt="foto de perfil"/>
         </div>
         </div>
         <div class="container-information"> 
         <div class="information">
         <span class="name">mali</span>
         <button id="editar-perfil" class="editar-perfil">Editar perfil</button>
         <span class="info">fronted-developer</span>
         </div>
         <div class = "table"> 
             <table>
                 <tr>
                     <th>#</th>
                     <th>#</th>
                     <th>#</th>
                 </tr>
                 <tr>
                     <td>Posts</td>
                     <td>Following</td>
                     <td>Followers</td>
                 </tr>
             </table>
             
         </div>        
         </div>
         </div>
         <hr>`;
    const divElem = document.createElement('div');
    divElem.setAttribute('class', 'perfil-container');
    divElem.innerHTML = templatePerfil;

    const editarPerfil = divElem.querySelector('#editar-perfil');
    editarPerfil.addEventListener('click', () => { 
    });
    return divElem; 
  },

  writingPost: () => {
    const templateWritingPost = `
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
              <input id="privacy-checkbox" type="checkbox" value="public">
              <label for="">Privado</label>
              <input id="privacy-checkbox" type="checkbox" value="private">
          </div>
          <button class="post">Publicar</button>
        </form>      
      </div>`;
    const post = document.createElement('div');
    post.innerHTML = templateWritingPost;

    const postingPost = post.querySelector('.post');
    postingPost.addEventListener('click', () => {
      addPostOnSubmit();
      window.location.hash = '#/wallPost';
    });
    return post;
  },

  wallPost: () => {
    const templatePost = `
      <div class="post-container">
        <div class="settings-box">
          <img src="./aicon/edit.ico" alt="" class="img-icon-post">
          <img src="./aicon/garbage-2.png" alt="" class="img-icon-post">
        </div>
        <div id="user-box" class="user-box">
              <img src="./aicon/user-2.png" alt="" id="user-pic-post" class="user-pic">
              <h2 id="user-name" class="user-name-post">Zoila Prima</h2>
              <h3></h3>
        </div> 
        <textarea id="post-text" class="text-area" cols="25" rows="5" readonly></textarea>
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
      </div>`;

    const wallPost = document.createElement('div');
    wallPost.innerHTML = templatePost;
    return wallPost;
  },
};
export default templatesLogin;

