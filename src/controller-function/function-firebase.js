// Función para poder Registrar una Cuenta Nueva
export const checkInFunction = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      swal(errorCode);
      swal(errorMessage);
    });

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
          swal('Es el mismo usuario');
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

// Función del usuario conectado, captura sus datos y los manda al perfil
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
      // return userInfo;
      callback(userInfo);
    });
};

// Función para saber si el usuario está loggeado

export const userLogged = () => firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // Usuario está loggeado


    // const displayName = user.displayName;
    // const emailVerified = user.emailVerified;
    // const photoURL = user.photoURL;
    // const isAnonymous = user.isAnonymous;
    // const uid = user.uid;
    // const providerData = user.providerData;
    window.location.hash = '#/perfil';
    const user = firebase.auth().currentUser;
    if (user !== null) {
      const emailUser = user.email;
      console.log(emailUser);
    } else {
      // usuario cerró sesion
    }
  }
});

// Guarda el Post en Firestore
export const getUserPostData = (content) => {
  console.log('inicio get user data');
  let datePost = firebase.firestore.FieldValue.serverTimestamp();
  // let statusPost = document.querySelector();
  let posts = firebase.firestore().collection('posts');
  let data = {
    currentName: name,
    // userPhoto: userPhotoLink,
    date: datePost,
    content: content,
    userId: firebase.auth().currentUser.uid,
    // likes: [],
    // privacity: statusPost
  };
  posts.add(data)
    .then(() => {
      console.log('hola')
      ;
    })

    .catch(() => {
      // console.log(err)
    });
};

// Llevar los datos del post al template

export const getPost = (callback) => {
  const user = firebase.auth().currentUser;
  // if(!user == null){
  // return null
  // };
  console.log(user);
  // proteger variables
  return firebase.firestore().collection('posts').where('userId', '==', user.uid)
    .onSnapshot((querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        data.push({ id: doc.id, ...doc.data()
        });
      });   
      callback(data);
    });
};


// funcion para eliminar post
export const deletePost = (idPost) => 
  firebase.firestore().collection('posts').doc(idPost).delete();
/*  swal({
    title: '¿Estas seguro de eliminar la publicación?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar'
  }).then(confirm => {
    firebase.firestore().collection('posts').doc(userId).delete();
  }).catch(element => {
    swal({
      confirmButtonText: 'Aceptar',
      type: 'error',
      title: 'Error al eliminar la publicación',
      text: 'Inténtalo de nuevo'
    });
  });
*/

// funcion para editar post

export const updatePost = (idPost, content) => { 
  const ref = firebase.firestore().collection('posts').doc(idPost);
  return ref.update({
    content: content,
  });
};

// })
// .then(function() {
//     console.log("Document successfully updated!");
// })
// .catch(function(error) {
//     // The document probably doesn't exist.
//     console.error("Error updating document: ", error);
// })
// Función para Cerrar Sesión
export const logOut = () =>
  firebase.auth().signOut();