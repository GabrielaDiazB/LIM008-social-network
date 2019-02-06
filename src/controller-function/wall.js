// FUNCIONES DE POST
// let userPhotoLink;
// let currentName;

// Guardando el post en firestore




// Eliminar el post
const deletePost = (Id) => {
  swal({
    title: '¿Estas seguro de eliminar la publicación?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ffc107',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Aceptar'
  }).then(confirm => {
    firebase.firestore().collection('posts').doc(Id).delete();
  }).catch(element => {
    swal({
      confirmButtonText: 'Aceptar',
      type: 'error',
      title: 'Error al eliminar la publicación',
      text: 'Inténtalo de nuevo'
    });
  });
};

export const deletePostOnClick = (objPost) => deletePost();