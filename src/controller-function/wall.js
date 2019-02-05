// FUNCIONES DE POST
// let userPhotoLink;
// let currentName;
let datePost = firebase.firestore.FieldValue.serverTimestamp();
// Guardando el post en firestore
const getUserPostData = (content) =>
// Al usar una const db=firebase.firestore aparecía este error:
// Firebase: No Firebase App [DEFAULT] has been created - call Firebase App.initializeApp() (app/no-app).
  firebase.firestore().collection('posts').add({ 
    // name: currentName,
    // userPhoto: userPhotoLink,
    date: datePost,
    content: content,
    // likes: [],
  });


export const addPostOnSubmit = () => {
  const contentPost = document.querySelector('#text-area');
  getUserPostData(contentPost.value)
    .then(result => {
      swal('¡Genial!', 'Tu post se subió satisfactoriamente', 'success')
        .catch(error => {
          console.error('Error adding document: ', error);
        });
    });
};

export const getPost = (callback) =>
  firebase.firestore().collection('posts')
    .onSnapshot((querySnapshot) => {
      const data = {};
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