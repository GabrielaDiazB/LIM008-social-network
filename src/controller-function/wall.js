// Agregar likes - en proceso

// 
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
          getPost();
        }).catch(element => {
          console.log('Error al aumentar contador de likes');
        });
      }
    });
};