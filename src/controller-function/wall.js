
export const getPost = (callback) =>
  firebase.firestore().collection('posts')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      callback(data);
    }); 

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