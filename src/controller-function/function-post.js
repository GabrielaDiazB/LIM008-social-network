//import { getNameUser, getPhotoUser } from '../lib-view/controller-login.js'

export const addUserPostData = (contentPost, userId, getNameUser, getPhotoUser, type, likes) => { 
  let posts = firebase.firestore().collection('posts');
  let data = {
    content: contentPost,
    uid: userId,
    name: getNameUser,
    userPhoto: getPhotoUser,
    date: firebase.firestore.FieldValue.serverTimestamp(),
    like: likes,
    filter: type
  };
  posts.add(data);
};

// llamando los datos del post al template
export const getPost = (callback) => {  
  return firebase.firestore().collection('posts').orderBy('date', 'desc')           //.where('userId', '==', user.uid)
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
