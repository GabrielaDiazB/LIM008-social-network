// Funciones para las publicaciones
const db = () => firebase.firestore();
document.getElementById('sign-out').addEventListener('click', event => {
  event.preventDefault();
  firebase.auth().signOut();
});

const getCurrentUserData = () => {
  let userPhoto;
  let currentName;
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setUserProfile();
      document.getElementById('send-post').addEventListener('click', event => {
        event.preventDefault();
        let timeOfPost = firebase.firestore.FieldValue.serverTimestamp();
        const contentOfPost = document.getElementById('user-content-post').value;
        if (contentOfPost !== '' && contentOfPost !== ' ') {
          if (user.photoURL !== null) {
            userPhoto = ./src/iconos/user-3.png;
          }
          else {
            userPhoto = user.photoURL;
          }
          if (user.displayName !== null) {
            currentName = user.email;
          }
          else {
            currentName = user.displayName;
          }
          db.collection('post').add({
            userID: user.uid,
            userName: currentName,
            userPhotos: userPhoto,
            time: timeOfPost,
            likes: [],
            content: contentOfPost
          })
        }      
      });
    }
  });
};
