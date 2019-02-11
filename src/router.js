import { signIn, register} from './templates/template-login.js';
import { perfil } from './templates/template-perfil.js'; 
import { writingPost } from './templates/template-post.js';
import { callDoc } from './controller-function/function-perfil.js';
import { getPost} from './controller-function/function-post.js';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/signIn');
  } else if (hash === '#/signIn' || hash === '#/register' || hash === '#/perfil' || hash === '#/writingPost' || hash === '#/wallPost') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/signIn');
  }
};

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const section = document.getElementById('log-container');
  const postSection = document.getElementById('post-container');
  postSection.innerHTML = '';
  section.innerHTML = '';
  switch (router) {
  /*case 'wallPost':
    privatePost((dataPost) => {
      postSection.innerHTML = '';
      postSection.appendChild(itemPost(dataPost));
    });
    break;*/
  case 'writingPost':
    getPost((dataPost) => {
      console.log(dataPost);
      postSection.innerHTML = '';
      postSection.appendChild(writingPost(dataPost));
    });
    break;
  case 'perfil':
    callDoc((data) => {
      section.innerHTML = '';
      section.appendChild(perfil(data));
    });
    break;
  case 'register':
    section.appendChild(register());
    break;
  case 'signIn':
    section.appendChild(signIn());
    break;
  default:
    section.appendChild(signIn());
    break;
  }
};

export const routerRed = () => {
  window.addEventListener('load',
    changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};