import {
  checkInOnClick,
  signInOnClick,
  googleOnClick,
  facebookOnClick,
  twitterOnClick} from '../lib-view/controller-login.js';

const changeHash = (hash) => {
  location.hash = hash;
};

export const signIn = () => {
  const templateSignIn = `
  <img src="../imagen/logo/Nombre.png" alt="logo" class="logoname-img">
  <div id="signin-container" class="signin-container">
    <p class="logotipo">"Reviews en actividades, hobbies, series, películas"</p>
    <div id="sign-in-box" class="container-login">
      <form>
        <input id="email-si" class="email" type="email" placeholder="Correo">
        <input id="password-si" class="password" type="password" placeholder="Contraseña">
        <button id="sign-in" class="login-btn" type="button">INICIAR SESIÓN</button>
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
    signInOnClick();
  });

  const btnFacebook = divElem.querySelector('#facebook-login');
  btnFacebook.addEventListener('click', facebookOnClick);

  const btnGoogle = divElem.querySelector('#google-login');
  btnGoogle.addEventListener('click', googleOnClick);

  const btnTwitter = divElem.querySelector('#twitter-login')
  btnTwitter.addEventListener('click', twitterOnClick);

  const btnQuestion = divElem.querySelector('#signup-question');
  btnQuestion.addEventListener('click', () => {
    changeHash('/register');  
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
          <button id="sign-up" class="sign-up-btn" type="button">Crear Cuenta</button>
        </form>
     </div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = templateRegister;

  const btnRegister = divElem.querySelector('#sign-up');
  btnRegister.addEventListener('click', () => { 
    checkInOnClick();
  });
  return divElem;
};

