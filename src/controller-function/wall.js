// Eliminar el post
const deletePost = (userId) => {
  swal({
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
};

export const deletePostOnClick = (objPost) => deletePost();