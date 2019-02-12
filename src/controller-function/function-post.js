//import { idUser} from '../lib-view/controller-login.js' 


export const addUserPostData = (contentPost, userId, getNameUser, getPhotoUser, type, likes, favorites) => { 
  let posts = firebase.firestore().collection('posts');
  let data = {
    content: contentPost,
    uid: userId,
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
export const getPost = (callback) => {  
  return firebase.firestore().collection('posts').orderBy('date', 'desc')    //where('uid', '==', idUser())
   .onSnapshot((querySnapshot) => {
      let data = [];
       querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()
        });
      });   
      callback(data);
    });
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


// Función para que un post sea privado
export const privacyStatePost = (type, callback) => {
  return firebase.firestore().collection('posts')
    .where('privacy', '==', type)
    .orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data()
      });
      callback(data);
    });
  });
};