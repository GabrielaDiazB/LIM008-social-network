
// Agregar likes - en proceso

const checkUserIDforLikes = (userId, likes) => {
  const positionUserId = likes.indexOf(userId);
  if (positionUserId === -1) {
    return true;
  } else {
    return positionUserID;
  }
};

const addLikes = (postId) => {
  const currentUser = user.uid;
  db.collection('posts').doc(postId).get()
    .then(post => {
      let userLikes = posts.data().likes;
      const checkUserLikes = checkUserIdforLikes(currentUser, posts.data().likes);
      if (checkUserLikes === true) {
        userLikes.push(currentUser);
        db.collection('posts').doc(postID).update({
          likes: currentUserLikes
        }).then(element => {
          //
        }).catch(element => {
          //
        });
      }
    });
};

const privatePost = () => {
  let collection = db.collection('posts')
    .where('privacity', '==', 'Privado')
    .where('userId', '==', `${dataPost.name}`)
    .orderBy('createdAt', 'desc');
  query.onSnapshot((content) => {
    createPost(content);
  });
};

const publicPost = () => {
  let collection = db.collection('posts')
    .where('privacity', '==', 'Público')
    .orderBy('createdAt', 'desc');
  query.onSnapshot((content) => {
    createPost(content);
  }); 
};

const countLikes = (userId, like, event) => {
  event.preventDefault();
  let likeUpdate = like + 1;
  firebase.firestore().collection('posts').doc(id).update({
    like: likeUpdate
  });
};