// import { getNameUser, getPhotoUser } from '../lib-view/controller-login.js'
import {idUser} from '../lib-view/controller-login.js'
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
  posts.add(data);
};

// llamando los datos del post al template
export const getPost = (callback) => {  

  return firebase.firestore().collection('posts').orderBy('date', 'desc')//.where('userId', '==', user.uid)
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
  const ref = firebase.firestore().collection('posts').doc(idPost);
  return ref.update({
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

export const privatePost = (callback, idPost, condition) => {
  let collection = firebase.firestore().collection('posts')
    .where('uid', '==', idUser())
    .where('privacy', '==', 'Privado') 
    .orderBy('date', 'desc');
  collection.onSnapshot((querySnapshot) => {
    getPost(querySnapshot);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data()
      });
      //console.log(data);
    });   
    
    callback(data);
  });
};

// Función para que un post sea público

// const publicPost = () => {
//   let collection = firestore.collection('posts')
//     .where('privacity', '==', 'Público')
//     .orderBy('createdAt', 'desc');
//   query.onSnapshot((content) => {
//     createPost(content);
//   });
// };