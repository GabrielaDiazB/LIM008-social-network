const DB = firebase.firestore();
export const postFunctions = () => {
	const postData = (uid, emailUser, tittle, content, imageLink) => {
		const getDB = get(DB);
		return DB.collection('posts').add({
			uid: uid,
			emailUser: emailUser,
			tittle: tittle,
			content: content,
			imageLink: imageLink,
			date: new Date()
		})
		.catch(error => console.log('Error', error))
	}

	const showAllPosts = () => {
		const posts = document.getElementById('posts');
		const db = getDB();
	}
};
