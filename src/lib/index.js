// aqui exportaras las funciones que necesites

export const signUpFunction = () => {

  const signUp = document.getElementById('sign-up');
  signUp.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
    });
  });

  const signIn = document.getElementById('sign-in');
  signIn.addEventListener('click', () =>{
    const emailSignIn = document.getElementById('email-si').value;
    const passwordSignIn = document.getElementById('password-si').value;
    firebase.auth().signInWithEmailAndPassword(emailSignIn, passwordSignIn).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
    });
  });
}
