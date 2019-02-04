
// let postData = {
//   uid: null,
//   image: null,
//   content: null,
//   date: null,
//   category: null,
//   state: null,
//   likes: null,
//   comentary: null
// };
// export const createPost = (postData) => {
// 	// Generar un id para la publicación.
// 	const newPostKey = firebase.database().ref().child('posts').push(postData.value).key;
// 	// Registrar en el objeto posts y user-post la nueva publicación
// 	const updates = {};
// 	postData.id = newPostKey;
// 	updates['/posts/' + newPostKey] = postData;
// 	updates['/user-posts/' + postData.uid + '/' + newPostKey] = postData;
// 	firebase.database().ref().update(updates);
// 	return newPostKey;
// }
