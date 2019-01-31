import { singInFunction } from './function.js';
import { registerFacebookLogIn } from './function.js';
import { registerGoogleLogIn } from './function.js';
import { registerTwitterLogIn } from './function.js';
import { registerLogIn } from './function.js';

    
export const objSignIn = () => {     
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
                </div>
                <div class="signup-container" id="sign-up-box">
                <form>
                <h2>Regístrate</h2>  
                <input id="user-name" class="user-name" type="text" placeholder="Nombre">
                <input id="email" class="email" type="email" placeholder="E-mail">
                <input id="password" class="password" type="password" placeholder="Contraseña">
                <button id="sign-up" class="sign-up-btn">Crear Cuenta</button>
                </form>
                </div>
                <div id="log-out-box" >
                  <h1>Bienvenido</h1>
                  <p id="user-para">Ejemplo de inicio de sesión</p>
                </div>`;
                const divElem = document.createElement('div');
                divElem.setAttribute('class', 'container');
                divElem.innerHTML = templateSignIn;

                const btnSignIn= divElem.querySelector('#sign-in')
                btnSignIn.addEventListener('click', singInFunction);

                const btnFacebook= divElem.querySelector('#facebook-login')
                btnFacebook.addEventListener('click',registerFacebookLogIn)

                const btnGoogle= divElem.querySelector('#google-login')
                btnGoogle.addEventListener('click',registerGoogleLogIn)

                const btnTwitter= divElem.querySelector('#twitter-login')
                btnTwitter.addEventListener('click',registerTwitterLogIn)

                const loginContainer =divElem.querySelector('#sign-up-box')
                loginContainer.style.display='none';
                
                const btnQuestion= divElem.querySelector('#signup-question')
                btnQuestion.addEventListener('click', () => {
                const signinContainer = divElem.querySelector('#signin-container')
                signinContainer.style.display='none';
                loginContainer.style.display='block';
                });

                const createRegister = divElem.querySelector('#log-out-box')
                createRegister.style.display='none';

                const btnRegister = divElem.querySelector('#sign-up')
                btnRegister.addEventListener('click', registerLogIn)
      
                return divElem;
};

