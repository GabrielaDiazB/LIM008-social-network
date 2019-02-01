import { 
  singInFunction,
  registerFacebookLogIn, 
  registerGoogleLogIn, 
  registerTwitterLogIn, 
  registerLogIn } from './function.js';

    
const templatesLogin = {   
  signIn: () => { 
    const templateSignIn = `
                <img src="./imagenes/Nombre.png" alt="logo" class="logoname-img">
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
      singInFunction();
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
      registerLogIn();
      window.location.hash = '#/welcome';
    });
    return divElem;
  },

  /*welcome: () => { 
    const templateWelcome = `
    <header>
         <nav>
            <img src="./imagenes/Logo2.png" alt="logowhite" class="logo-img">
            <a href="#signIn"><img src="iconos/exit-1.png" id="log-out" class ="icon-header" alt=""></a>
         </nav>
      </header>

    <div id="log-out-box" >
    <h1>Bienvenido</h1>
    <p id="user-para">Ejemplo de inicio de sesión</p>
    </div>

    <footer id="footer-container">
        <nav>
          <div class="footer">
            <a href="#"><img src="iconos/house.png" class ="icon-footer" alt=""></a>
            <a href="#"><img src="iconos/search.png" class ="icon-footer" alt=""></a>
            <a href="#"><img src="iconos/add-3.png" class ="icon-footer" alt=""></a>
            <a href="#"><img src="iconos/user-1.png" class ="icon-footer" alt=""></a>
          </div>
        </nav>
      </footer>`;
    const divElem = document.createElement('div');
    divElem.innerHTML = templateWelcome;


    return divElem; 
  },*/




};


export default templatesLogin;

