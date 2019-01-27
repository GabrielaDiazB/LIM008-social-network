// aquí exportaras las funciones que necesites

export const signUpFunction = () => {

  const signUp = document.getElementById('sign-up');
  signUp.addEventListener('click', () => {
    let email = document.getElementById('email-register').value;
    const password = document.getElementById('password-register').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
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
    firebase.auth().signInWithEmailAndPassword(emailSignIn, passwordSignIn).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
    });
  });

}

const writeDatabase = (user) => {
  //muestrame si existe el usuario
  var profile = firebase.database().ref().child('users/' + user.uid);
  profile.on('value', snap => {
    let userData = JSON.stringify(snap.val(),null,3);//tbm funciona un solo parametro
    userData = JSON.parse(userData);
    if(userData == null) {
      if(user.photoURL == null){
        foto = "https://cdn.dribbble.com/users/37144/screenshots/3739334/edit.gif";
      } else {
        foto= user.photoURL;
      }
      const  usuario = {
        uid : user.uid,
        nombre,
        email:user.email,
        foto,
      }
      firebase.database().ref("users/" + usuario.uid)
      .set(usuario)
      console.log(usuario);
      document.location.href = 'profile.html';
    } else {
      console.log('ya existe este usuario');
      document.location.href = 'profile.html';
    }
  })
}

