// Función para poder Registrar una Cuenta Nueva
export const registerLogIn = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);
    })
  const firestore = firebase.firestore();
  let emailRef = email;
  let passwordRef = password;
  let users = firestore.collection('users');
  let data = {
    password: passwordRef,
    email: emailRef,
  };
  users.add(data)
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.error(err);
    });
};                   

// Función para Iniciar Sesión
export const singInFunction = () => {
  const userEmail = document.querySelector('#email-si').value;
  const userPassword = document.querySelector('#password-si').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert('Error : ' + errorCode);
      window.alert('Error : ' + errorMessage);
    });


};

// Función para saber si el usuario está loggeado o no

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // Usuario está loggeado
//     // const displayName = user.displayName;
//     // const emailVerified = user.emailVerified;
//     // const photoURL = user.photoURL;
//     // const isAnonymous = user.isAnonymous;
//     // const uid = user.uid;
//     // const providerData = user.providerData;

//     const user = firebase.auth().currentUser;
//     if (user !== null) {
//       const emailUser = user.email;
//       console.log(emailUser)
//     }

//   } else {
//     // Usuario ha cerrado sesión
//   }
// });

// Función para Iniciar Sesión con Facebook
export const registerFacebookLogIn = () => {
  if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;

        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('Es el mismo usuario');
        }
      });
  } else {
    firebase.auth().signOut();
  }
};

// Función para Iniciar Sesión con Google
export const registerGoogleLogIn = () => {
  if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user.displayName);

      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const  errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('Es el mismo usuario');
        }
      });
  } else {
    firebase.auth().signOut();
  }
};

// Función para Iniciar Sesión con Twitter
export const registerTwitterLogIn = () => {
  if (!firebase.auth().currentUser);
  const  provider = new firebase.auth.TwitterAuthProvider();
  // provider.addScope('public_profile');//
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      const  token = result.credential.accessToken;
      const  user = result.user;

    }).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
    })
};

// Función para Cerrar Sesión
export const logOut = () => {
  firebase.auth().signOut();
};
