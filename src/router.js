import { signIn, register, perfil } from './templates/template-login.js';
import { callDoc } from './controller-function/function-firebase.js';
const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/signIn');
  } else if (hash === '#/signIn' || hash === '#/register' || hash === '#/perfil') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/signIn');
  }
};

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const section = document.getElementById('log-container');
  section.innerHTML = '';
  switch (router) {
    case 'signIn':
      section.appendChild(signIn());
      break;
    case 'register':
      section.appendChild(register());
      break;
    case 'perfil':
      callDoc((data) => {
        section.innerHTML = '';
        section.appendChild(perfil(data));
      })

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
