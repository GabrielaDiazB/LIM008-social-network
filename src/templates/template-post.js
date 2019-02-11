import { 
  addPostOnSubmit,
  deletePostOnSubmit,
  updatePostSubmit,
  updateLikesOnSubmit
} from '../lib-view/controller-post.js';

import { templateBarraNav } from './template-barraNav.js';

export const writingPost = (objPost) => {
  const templateWritingPost = `
      ${templateBarraNav}
        <div class="post-container">
          <i class="fa fa-arrow-left"></i>
          <h1 class="text-align">¿Qué Recomiendas?</h1>
          <form>
            <div class="activity-filter">
                <label for="">Interior</label>
                <input type="checkbox" value="Inside">
                <label for="">Exterior</label>
                <input type="checkbox" value="Outside"> 
            </div>
            <textarea id="text-area" class="text-area" cols="25" rows="5" autofocus placeholder="Escribe aquí..." required></textarea>
            <div class="privacy-filter">
                <label for="">Público</label>
                <input id="privacy-checkbox" type="checkbox" value="public">
                <label for="">Privado</label>
                <input id="privacy-checkbox" type="checkbox" value="private">
            </div>
            <button type="button" class="post" id="post">Publicar</button>
          </form>      
        </div>`;
  const post = document.createElement('div');
  post.innerHTML = templateWritingPost;
  
  const postingPost = post.querySelector('#post');
  postingPost.addEventListener('click', addPostOnSubmit);
  
  const ul = post.querySelector('.post-container');
  objPost.forEach(post => {
    ul.appendChild(itemPost(post));    
  });
  return post;
};
  
const itemPost = (dataPost) => {
  const liElement = document.createElement('li');
  liElement.classList.add('mdl-list__item');
  liElement.innerHTML = `
      ${templateBarraNav}
        <div class="post-container-posted">
          <div class="settings-box">
            <img src="../imagen/aicon/edit.ico" alt="" class="img-icon-post" id="btn-update-${dataPost.id}">
            <img src="../imagen/aicon/garbage-2.png" alt="" id="btn-delete-${dataPost.id}" class="img-icon-post">
          </div>
          <form>
            <div id="user-box" class="user-box">
                  <img src="${dataPost.userPhoto} alt="" id="user-pic-post" class="user-pic">
                  <h2 id="user-name" class="user-name-post">${dataPost.name}</h2>
                  <h5>${dataPost.date}</h5>
            </div> 
            <textarea id="post-edit-${dataPost.id}" class="text-area" cols="25" rows="5" disabled>${dataPost.content}</textarea>
            <div class="privacy-box">
              <i class="fa fa-unlock" class="img-icon-post"></i>
              <i class="fa fa-lock" class="img-icon-post"></i>
            </div>
            <div class="interact-box">
              <label for="" class="click-counter-likes" id="click-counter-likes">${dataPost.like}</label>
              <img src="../imagen/aicon/like-2.png" alt="" id="like-btn-${dataPost.id}" class="img-icon-post">
              <label for="" class="click-counter-favorites" id="click-counter-favorites"></label>
              <img  src="../imagen/aicon/star-1.png" alt="" class="img-icon-post" id="favorite-btn">
            </div> 
            <button id="save-post-edit" class="save-post-edit" type="button">Guardar</button>
          </form>      
        </div>`;
  liElement.querySelector('#save-post-edit').style.display = 'none';
  const editBtn = liElement.querySelector(`#btn-update-${dataPost.id}`);
  const textArea = liElement.querySelector(`#post-edit-${dataPost.id}`);
  editBtn.addEventListener('click', () => {
    textArea.disabled = false;
    liElement.querySelector('#save-post-edit').style.display = 'block';
  });
        
  const saveEdit = liElement.querySelector('#save-post-edit');
  saveEdit.addEventListener('click', () => {
    textArea.disabled = true;
    updatePostSubmit(dataPost.id, textArea.value);
    liElement.querySelector('#save-post-edit').style.display = 'none';
  });
  
  const deleted = liElement.querySelector(`#btn-delete-${dataPost.id}`);
  deleted.addEventListener('click', () => {
    deletePostOnSubmit(dataPost);
  });

  const likesBtn = liElement.querySelector(`#like-btn-${dataPost.id}`)
  likesBtn.addEventListener('click', () => {
    updateLikesOnSubmit(dataPost, dataPost.like += 1);  
  });
  
  return liElement;
};