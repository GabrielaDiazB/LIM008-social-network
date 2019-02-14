
// llamando a datos para crear un perfil
export const callDoc = (callback) => {
  return firebase.firestore().collection('posts')
    //.where('userId', '==', user)
    .get()
    .then((querySnapshot) => {
      let userInfo = {};
      querySnapshot.forEach((doc) => {
        userInfo = {
          id: doc.id,
          ...doc.data()
        };
        console.log(userInfo)

      });
      callback(userInfo);
    });
}; 

