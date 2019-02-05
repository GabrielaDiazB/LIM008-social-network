import templatesLogin from './templates/template-login.js';

const viewTmp = (routers) => {
  let router;
  if (routers) { 
    router = routers.substr(2, routers.length - 2);
  // } else if (router !== routers.substr(2, routers.length - 2)) {
  //   return router = 'signIn';
  } else {
    router = 'writingPost';
    router = 'perfil';
    router = 'welcome';
    router = 'register';
    router = 'signIn';
  
  }
  const section = document.getElementById('log-container');
  section.innerHTML = '';
  section.appendChild(templatesLogin[router]());
};

export const changeTmp = (hash) => {
  return viewTmp(hash);
};

