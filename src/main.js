const config = {
  apiKey: 'AIzaSyD4hC2dSxbuFkLy3bux0-zw3XzMEqTO91Y',
  authDomain: 'redsocial-npng.firebaseapp.com',
  databaseURL: 'https://redsocial-npng.firebaseio.com',
  projectId: 'redsocial-npng',
  storageBucket: 'redsocial-npng.appspot.com',
  messagingSenderId: '731862420435'
};
firebase.initializeApp(config);

import { changeTmp } from './router.js';

window.addEventListener('load', () => { 
  changeTmp(window.location.hash);
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash)
});