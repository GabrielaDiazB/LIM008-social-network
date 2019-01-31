const templateLibrary = {
  signin: `
        <div class="signin-container">
            <p class="logotipo">"Bla bla bla bla bla bla bla"</p>
            <div id="sign-in-box" class="container-login">
                <form>
                    <input id="email-si" class="email" type="email" placeholder="Usuario">
                    <input id="password-si" class="password" type="password" placeholder="Contraseña">
                    <a id="sign-in" class="login-btn" href="#/welcome">Iniciar Sesión</a>
                    <h2>Ingresa directamente con:</h2>
                    <button id="facebook-login" class="fa fa-facebook"></button>
                    <button id="google-login" class="fa fa-google"></button>
                </form>
            </div>
        </div>`,
  registerquest: `
        <a  id="signup-question" class="signup-question" href="#/signup">
            <h4>¿No tienes una cuenta?</h4>
        </a>`,
  signup: `
    <div class="signup-container" id="sign-up-box">
        <form>
            <h2>Regístrate</h2>  
            <input id="user-name" class="user-name" type="text" placeholder="Nombre">
            <input id="email" class="email" type="email" placeholder="E-mail">
            <input id="password" class="password" type="password" placeholder="Contraseña">
            <button id="sign-up" class="sign-up-btn">Crear Cuenta</button>
        </form>
    </div>`,
  welcome: `
        <div id="log-out-box" >
            <h1>Bienvenido</h1>
            <p id="user-para">Ejemplo de inicio de sesión</p>
        </div>`,
  different: `
    <div id="message">
        <h2>404</h2>
        <h1>Página no encontrada</h1>
        <p>El archivo especificado no se encontró en este sitio web. Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
    </div>`
};

export { templateLibrary };
