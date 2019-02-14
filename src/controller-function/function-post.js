
export const addUserPostData = (contentPost, idUser, getNameUser, getPhotoUser, type, likes, favorites) => { 
  let posts = firebase.firestore().collection('posts');
  let data = {
    content: contentPost,
    uidUser: idUser.uid,
    name: getNameUser,
    userPhoto: getPhotoUser,
    date: firebase.firestore.FieldValue.serverTimestamp(),
    like: likes,
    favorite: favorites,
    privacy: type
  };
  return posts.add(data);
};

// llamando los datos del post al template         
export const getPost = (callback, idUser) => {  
  if (idUser !== null) {
    return firebase.firestore().collection('posts')
      .orderBy('date', 'desc') 
      .onSnapshot((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data()
          });
        });   
        callback(data);
      });
  } else if (idUser === null) {
    return firebase.firestore().collection('posts')
      .where('privacy', '==', 'publico')
      .orderBy('date', 'desc')  
      .onSnapshot((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data()
          });
        });
        callback(data); 
      });
  }
};
  

// funcion para eliminar post
export const deletePost = (idPost) => 
  firebase.firestore().collection('posts').doc(idPost).delete();

// funcion para editar post
export const updatePost = (idPost, content) => { 
  let refPost = firebase.firestore().collection('posts').doc(idPost);
  return refPost.update({
    content: content,
  });
};

// funcion para dar likes
export const likesPost = (idPost, likes) => {
  let ref = firebase.firestore().collection('posts').doc(idPost);
  return ref.update({
    like: likes
  });
};

// Función para dar Favorito
export const favoritesPost = (idPost, favorites) => {
  let ref = firebase.firestore().collection('posts').doc(idPost);
  return ref.update({
    favorite: favorites
  });
};