// Función para poder Registrar una Cuenta Nueva
export const checkInFunction = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);
  
// Función para Iniciar Sesión
export const singInFunction = (userEmail, userPassword) =>
  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword);

// Función para Iniciar Sesión con Facebook
export const registerFacebookLogIn = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Función para Iniciar Sesión con Google
export const registerGoogleLogIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Función para Iniciar Sesión con Twitter
export const registerTwitterLogIn = () => {
  const provider = new firebase.auth.TwitterAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Función para Cerrar Sesión
export const logOut = () => {
  return firebase.auth().signOut();
};