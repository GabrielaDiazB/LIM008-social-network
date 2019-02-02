// Funciones para las publicaciones
const db = () => firebase.firestore();
document.getElementById('log-out').addEventListener('click', event => {
  event.preventDefault();
  firebase.auth().signOut();
});

const getUserPostData = () => {
  // let userPhoto
  // let currentUserName
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      document.getElementById('send-post').addEventListener('click', event => {
        event.preventDefault();
        const contentOfPost = document.getElementById('user-content').value;
        if (contentOfPost !== '' && contentOfPost !== ' ') {
        /*  if (user.photoURL === null) { 
            userPhoto = './src/iconos/userProfile.png';
          } else {
            userPhoto = user.photoURL;
          }
          if (user.displayName === null) {
            currentUserName = user.email;
          } else {
            currentUserName = user.displayName;
          }*/
          db.collection('posts').add({
            content: contentOfPost
          }).then(result => {
            // Swal es una dependencia que instale: Sweet Alert es un alert con diseño incluido
            // documentación aquí: https://sweetalert.js.org/guides/#getting-started
            swal({
              confirmButtonText: 'Aceptar',
              type: 'success',
              title: 'Publicación exitosa'
            });
            document.getElementById('user-content').value = ''; 
          }).catch(error => {
            console.error('Error al añadir el documento: ', error);
          });
        }
      });
    };
  }); 
};
