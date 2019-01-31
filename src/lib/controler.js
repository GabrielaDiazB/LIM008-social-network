import { objSignIn }  from './template.js';

export const renderUI = () => {
  const section = document.getElementById('log-container');
  section.innerHTML = '';
  const div = objSignIn();
  section.appendChild(div);
};