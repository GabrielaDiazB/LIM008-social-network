
// llamando a datos para crear un perfil
export const callDoc = (callback) => {
  return firebase.firestore().collection('users')
    .get()
    .then((querySnapshot) => {
      let userInfo = {};
      querySnapshot.forEach((doc) => {
        userInfo = {
          id: doc.id,
          ...doc.data()
        };
      });
      callback(userInfo);
    });
}; 

