import { getNameUser, getPhotoUser } from '../lib-view/controller-login.js';
import { addUserPostData, deletePost, updatePost, likesPost, favoritesPost} from '../controller-function/function-post.js';
import { idUser } from './controller-login.js';

// controler para guardar el post en  firebase cloud
export const addPostOnClick = () => {
  const filterPrivatePrivacy = document.querySelector('#privacy-filter').value;
  const contentPost = document.querySelector('#text-area').value;
  let countLike = 0;
  let countFavorite = 0;
  const uid = idUser();
  const name = getNameUser();
  const photo = getPhotoUser();
  addUserPostData(contentPost, uid, name, photo, filterPrivatePrivacy, countLike, countFavorite);
};
  
export const deletePostOnClick = (objPost) => { 
  if (confirm('¿¡Estás seguro de eliminar el post!?'))
    return deletePost(objPost.id);
};
  
export const updatePostOnClick = (objPost, content) => {
  return updatePost(objPost, content);
};

export const updateLikesOnClick = (objPost, like) => {
  return likesPost(objPost.id, like);
};

export const updateFavoritesOnClick = (objPost, favorite) => {
  return favoritesPost(objPost.id, favorite);
};