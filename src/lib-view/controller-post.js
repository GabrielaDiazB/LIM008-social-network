import { getNameUser, getPhotoUser } from '../lib-view/controller-login.js';
import { addUserPostData, deletePost, updatePost, likesPost, favoritesPost} from '../controller-function/function-post.js';
import { idUser } from './controller-login.js';

// controler para guardar el post en  firebase cloud
export const addPostOnSubmit = () => {
  const filterPrivatePrivacy = document.querySelector('#privacy-filter').value;
  const contentPost = document.querySelector('#text-area').value;
  let countLike = 0;
  let countFavorite = 0;
  const uidUser = idUser();
  const name = getNameUser();
  const photo = getPhotoUser();
  addUserPostData(contentPost, uidUser, name, photo, filterPrivatePrivacy, countLike, countFavorite);
};
  
export const deletePostOnSubmit = (objPost) => { 
  if (confirm('¿¡Estás seguro de eliminar el post!?'))
    return deletePost(objPost.id);
};
  
export const updatePostSubmit = (objPost, content) => {
  return updatePost(objPost, content);
};

export const updateLikesOnSubmit = (objPost, like) => {
  return likesPost(objPost.id, like);
};

export const updateFavoritesOnSubmit = (objPost, favorite) => {
  return favoritesPost(objPost.id, favorite);
};