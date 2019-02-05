// Funciones para las publicaciones
const db = firebase.firestore();

// Guarda contenido del post en firestore
export const getUserPostData = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const send = document.querySelector('#send-post');
      send.addEventListener('click', event => {
        const content = document.querySelector('#content').value;
        db.collection('posts').add({
          content: content,
        })
          .then(result => {
            console.log(result);
          })
          .catch(error => {
            console.error(error);
          });
      });
    };
  }); 
};

const showUserPost = () => {
  firebase.onAuthStateChanged(user => {
    if (user) {
      const currentUser = user.uid;
      const postRef = db.collection('posts');
    }
  });
};

/* Swal es una dependencia que instale: Sweet Alert es un alert con diseño incluido
            // documentación aquí: https://sweetalert.js.org/guides/#getting-started
            swal({
              confirmButtonText: 'Aceptar',
              type: 'success',
              title: 'Publicación exitosa'
            });
            */

const deletePost = (postID) => {
  swal({
    title: '¿Estas seguro de eliminar la publicación?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ffc107',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Aceptar'
  }).then(confirm => {
    if (confirm.value) {
      db.collection('post').doc(postID).delete() 
        .then(element => { 
          swal({
            confirmButtonText: 'Aceptar',
            type: 'success',
            title: 'Publicación eliminada'
          });
          drawPostByUser();
        }).catch(element => {
          swal({
            confirmButtonText: 'Aceptar',
            type: 'error',
            title: 'Error al eliminar la publicación',
            text: 'Inténtalo de nuevo'
          });
        });
    }
  });
};
          
          