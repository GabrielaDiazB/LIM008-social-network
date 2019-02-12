
// Agregar likes - en proceso
const checkUserIDforLikes = (userId, likes) => {
  const positionUserId = likes.indexOf(userId);
  console.log(positionUserId);
  if (positionUserId === -1) {
    return true;
  } else {
    return positionUserID;
  }
};

const likesCounter = (postId, like, event) => {
  event.preventDefault();
  let likeUpdate = like + 1;
  firebase.firestore().collection('posts').doc(postId).update({
    like: likeUpdate
  });
};

const addLikes = (postId) => {
  const currentUser = userId.uid;
  db.collection('posts').doc(postId).get()
    .then(post => {
      let userLikes = posts.data().likes;
      const checkUserLikes = checkUserIdforLikes(currentUser, posts.data().likes);
      if (checkUserLikes === true) {
        userLikes.push(currentUser);
        db.collection('posts').doc(postID).update({
          likes: likes
        }).then(element => {
          // something
        }).catch(element => {
          // something
        });
      }
    });
};

const privatePost = () => {
  let collection = db.collection('posts')
    .where('privacity', '==', 'Privado')
    .where('userId', '==', `${userId.uid}`)
    .orderBy('createdAt', 'desc');
  collection.onSnapshot((content) => {
    getPost(content);
  });
};

const publicPost = () => {
  let collection = db.collection('posts')
    .where('privacity', '==', 'Público')
    .orderBy('createdAt', 'desc');
  collection.onSnapshot((content) => {
    getPost(content);
  }); 
};

