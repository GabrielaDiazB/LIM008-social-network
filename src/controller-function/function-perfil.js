import { idUser } from '../lib-view/controller-login.js';
// llamando a datos para crear un perfil
export const callDoc = (callback) => {
  return firebase.firestore().collection('posts')
    // .where('uid', '==', idUser)
    .get()
    .then((querySnapshot) => {
      let userInfo = {};
      if (userInfo.uid === idUser) {
        querySnapshot.forEach((doc) => {
          userInfo = {
            id: doc.id,
            ...doc.data()
          };
          console.log(userInfo);
        });
      }
      callback(userInfo);
    });
};
