// Función para poder Registrar una Cuenta Nueva
export const checkInFunction = (email, password) => 
  firebase.auth().createUserWithEmailAndPassword(email, password);
    /*.catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);*/
                    

// Función para Iniciar Sesión
export const singInFunction = (userEmail, userPassword) => 
  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .catch(function(error) {
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
    }).catch(() => {});
};

// Función para Cerrar Sesión
export const logOut = () => 
  firebase.auth().signOut();

export const callDoc = () => 
  firebase.auth().onAuthStateChanged(() =>  {
   firebase.firestore().collection('users')
    .get()
      .then((users) => users.forEach(doc => {   
      console.log(`${doc.data().name}`);
    }))
    .catch(() => {})
  })

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
