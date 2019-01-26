// aqui exportaras las funciones que necesites

export const signUpFunction = () => {

  // Función para poder Registrarse

  const signUp = document.getElementById('sign-up');

  signUp.addEventListener('click', (event) => {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      
      console.log(errorCode);
      console.log(errorMessage);
    });
  });

  // Función para saber si el usuario está loggeado o no

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // Usuario está loggeado
      document.getElementById('log-out-box').style.display = 'block';
      document.getElementById('sign-in-box').style.display = 'none';

      // const displayName = user.displayName;
      // const email = user.email;
      // const emailVerified = user.emailVerified;
      // const photoURL = user.photoURL;
      // const isAnonymous = user.isAnonymous;
      // const uid = user.uid;
      // const providerData = user.providerData;

      const user = firebase.auth().currentUser; 
      if(user !== null){
        const email_id = user.email;
        document.getElementById('user-para').innerHTML = 'Welcome User : ' + email_id
      } 

    } else {
      // Usuario ha cerrado sesión
      document.getElementById('log-out-box').style.display = 'none';
      document.getElementById('sign-in-box').style.display = 'block';
    }
  });

  // Función para Iniciar Sesión

  const signIn = document.getElementById('sign-in');
  signIn.addEventListener('click', (event) => {
    event.preventDefault()
    const userEmail = document.getElementById('email-si').value;
    const userPassword = document.getElementById('password-si').value;

    firebase.auth().signInWithEmailAndPassword(userEmail,userPassword ).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert('Error : ' + errorCode);
      window.alert('Error : ' + errorMessage);
    });

  });

  // Función para Cerrar Sesión
  const logOut = document.getElementById('log-out');
  logOut.addEventListener('click', () => {
    firebase.auth().signOut();
    });
}
