import { routerRed } from './router.js';

const init = () => { 
  const config = {
    apiKey: 'AIzaSyD4hC2dSxbuFkLy3bux0-zw3XzMEqTO91Y',
    authDomain: 'redsocial-npng.firebaseapp.com',
    databaseURL: 'https://redsocial-npng.firebaseio.com',
    projectId: 'redsocial-npng',
    storageBucket: 'redsocial-npng.appspot.com',
    messagingSenderId: '731862420435'
  };

  firebase.initializeApp(config);

  routerRed();
};

window.onload = init();
