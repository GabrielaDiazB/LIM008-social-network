import { 
  checkInOnSubmit,
  signInOnSubmit,
  logOutOnSubmit,
callDocSubmit} from '../view-controller.js';
import {
  registerFacebookLogIn,
  registerGoogleLogIn,
  registerTwitterLogIn,
  
} from '../controller-function/function-firebase.js';

const gg = document.getElementById('header-container')
gg.addEventListener('click', () => {
logOutOnSubmit();
})

const templatesLogin = {   
  signIn: () => { 
    const templateSignIn = `
      <img src="./logo/Nombre.png" alt="logo" class="logoname-img">
      <div id="signin-container" class="signin-container">
        <p class="logotipo">"Bla bla bla bla bla bla bla"</p>
        <div id="sign-in-box" class="container-login">
          <form>
            <input id="email-si" class="email" type="email" placeholder="Usuario">
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
      signInOnSubmit();
      callDocSubmit();
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
      <input id="information" class="information" type="text" placeholder="Escribe algo sobre ti...">
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

  perfil : () => {
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
    return divElem; 
  }
};
export default templatesLogin;
