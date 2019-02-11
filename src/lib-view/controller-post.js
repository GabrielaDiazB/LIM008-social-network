import { getNameUser, getPhotoUser } from '../lib-view/controller-login.js';
import { addUserPostData, deletePost, updatePost, likesPost} from '../controller-function/function-post.js';
import { idUser } from './controller-login.js';

// controler para guardar el post en  firebase cloud
export const addPostOnSubmit = () => {
  const filterPost = document.querySelector('#privacy-checkbox').value;
  const contentPost = document.querySelector('#text-area').value;
  let countLike = 0;
  const uidUser = idUser();
  const name = getNameUser();
  const photo = getPhotoUser();
  addUserPostData(contentPost, uidUser, name, photo, filterPost, countLike);
};
  
export const deletePostOnSubmit = (objPost) => { 
  if (confirm('esta seguro de eliminar!!!'))
    return deletePost(objPost.id);
};
  
export const updatePostSubmit = (objPost, content) => {
  return updatePost(objPost, content);
};

export const updateLikesOnSubmit = (objPost, like) => {
  return likesPost(objPost.id, like);
};
  
  