import { signIn, register, perfil} from './templates/template-login.js';
import writePost from './templates/template-login.js';
import { callDoc, getPost} from './controller-function/function-firebase.js';
const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/signIn');
  } else if (hash === '#/signIn' || hash === '#/register' || hash === '#/perfil' || hash === '#/writingPost') {
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
  case 'writingPost':
    getPost((objPost) => {
      console.log(dataPost);
      postSection.innerHTML = '';
      postSection.appendChild(writePost(objPost));
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
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash)
};