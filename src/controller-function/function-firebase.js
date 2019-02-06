// Función para poder Registrar una Cuenta Nueva
export const checkInFunction = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });

// Función para Iniciar Sesión
export const singInFunction = (userEmail, userPassword) =>
  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert('Error : ' + errorCode);
      window.alert('Error : ' + errorMessage);
    });

// Función para Iniciar Sesión con Facebook
export const registerFacebookLogIn = () => {
  if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    firebase.auth().signInWithPopup(provider)
      .then(() => {
        window.location.hash = '#/perfil';
      })
      .catch((error) => {
        const errorCode = error.code;
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
      .then(() => {
        window.location.hash = '#/perfil';
      })
      .catch((error) => {
        const errorCode = error.code;
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
  const provider = new firebase.auth.TwitterAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(() => {
      window.location.hash = '#/perfil';
    }).catch(() => { });
};

// Función para Cerrar Sesión
export const logOut = () =>
  firebase.auth().signOut();

export const callDoc = (callback) => { 
  const user = firebase.auth().currentUser;
  console.log(user);
  return firebase.firestore().collection('users').where('userId', '==', user.uid)
    .get()
    .then((querySnapshot) => {
      let userInfo = {};
      querySnapshot.forEach((doc) => {
        userInfo = {
          id: doc.id,
          ...doc.data()
        };
        console.log(userInfo);

      });
      //return userInfo;
      callback(userInfo);
    });
};

export const userLogged = () => 
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      window.location.hash='#/perfil';
      const user =firebase.auth().currentUser;
      if(user !== null) {
        const emailUser = user.email;
        console.log(emailUser);
      }
    }
    else {
      //usuariocerrasesion
    }
  });

/*// funcion para eliminar post
const firestore = firebase.firestore();
firestore.collection("users").doc("id").delete()
.then(() => {
    console.log("Document successfully deleted!");
})
.catch((error) => {
    console.error("Error removing document: ", error);
});

// funcion para editar post

const washingtonRef = firestore.collection("users").doc("id");

return washingtonRef.update({
    capital: true
})
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});*/