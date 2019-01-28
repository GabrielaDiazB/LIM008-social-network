// Función para guardar los datos de usuario en Firebase

export const signUpFunctions = () => {
  
  // Función para poder Registrarse
  document.getElementById('sign-up-box').style.display = 'none';
  signUpQuestion.addEventListener('click', () => {
    document.getElementById('sign-up-box').style.display = 'block';
    document.getElementById('sign-in-box').style.display = 'none';
    document.getElementById('signup-question').style.display = 'none';
  });

  signUp.addEventListener('click', (event) => {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    
    alert(errorCode);
    alert(errorMessage);
   // console.log(errorCode);
   // console.log(errorMessage);
  });
  
  // Funcionalidad para guardar los datos de usuario en base de datos Firebase
    const database = firebase.database();
    let emailRef = email;
    let passwordRef = password;
    let ref = database.ref('user');
    let data = {
      password: passwordRef,
      email: emailRef,
    };
    let userNew = ref.push(data);
    let keyUser = userNew.getKey();
    console.log(keyUser); // este es el identificador de la base de datos con el que se guarda

  });  

  // Función para saber si el usuario está loggeado o no
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // Usuario está loggeado
      document.getElementById('log-out-box').style.display = 'block';
      document.getElementById('sign-in-box').style.display = 'none';
      document.getElementById('log-out').style.display = 'block';
      document.getElementById('footer-container').style.display = 'block';
      document.getElementById('signup-question').style.display = 'none';
      
      // const displayName = user.displayName;
      // const emailVerified = user.emailVerified;
      // const photoURL = user.photoURL;
      // const isAnonymous = user.isAnonymous;
      // const uid = user.uid;
      // const providerData = user.providerData;

      const user = firebase.auth().currentUser; 
      if(user !== null){
        const emailUser = user.email;
        document.getElementById('user-para').innerHTML = 'Welcome User : ' + emailUser;
      } 

    } else {
      // Usuario ha cerrado sesión
      document.getElementById('log-out-box').style.display = 'none';
      document.getElementById('sign-in-box').style.display = 'block';
      document.getElementById('log-out').style.display = 'none';
      document.getElementById('signup-question').style.display = 'block';
      document.getElementById('footer-container').style.display = 'none';
    }
  });

  // Función para Iniciar Sesión creando una cuenta con correo propio

  signIn.addEventListener('click', (event) => {
    event.preventDefault();
    const userEmail = document.getElementById('email-si').value;
    const userPassword = document.getElementById('password-si').value;

    firebase.auth().signInWithEmailAndPassword(userEmail,userPassword ).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert('Error : ' + errorCode);
      window.alert('Error : ' + errorMessage);
    });

  });

  // Función para Iniciar Sesión con Google
  googleLogIn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!firebase.auth().currentUser){
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;


        console.log(user);

      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        if(errorCode === 'auth/account-exists-with-different-credential') {
          alert ('Es el mismo usuario');
        }
      });
    } else{
      firebase.auth().signOut();
    }
  });

  // Función para Iniciar Sesión con Facebook
  facebookLogIn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!firebase.auth().currentUser){
      var provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('public_profile');
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        
        console.log(user);

      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        if(errorCode === 'auth/account-exists-with-different-credential') {
          alert ('Es el mismo usuario');
        }
      });
    } else{
      firebase.auth().signOut();
    }
  });

  // Función para Cerrar Sesión
  logOut.addEventListener('click', () => {
    firebase.auth().signOut();
  });
}

 
