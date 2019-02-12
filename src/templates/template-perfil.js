import { logOutOnSubmit} from '../lib-view/controller-login.js';
import { templateBarraNav } from './template-barraNav.js';

export const profile = (data) => {
  const templatePerfil = `
    ${templateBarraNav}
        <div class="container">
          <div class="container-profile">
            <div class="ft-perfil">
              <img src= "${data.userPhoto}" class="ft" alt="foto de perfil"/>
            </div>
          </div>
          <div class="container-information"> 
            <div class="information">
              <span class="name">${data.displayName}</span>
              <span class="info">${data.information}</span>
            </div>
            <div class = "table"> 
              <table>
                <tr>
                  <th>#</th>
                  <th>#</th>
                </tr>
                <tr>
                  <td>Me encanta</td>
                  <td>Favoritos</td>
                </tr>
             </table>    
            </div>        
          </div>
        </div>
      `;
  const divElem = document.createElement('div');
  divElem.setAttribute('class', 'perfil-container');
  divElem.innerHTML = templatePerfil;
  
  const logOutBtn = divElem.querySelector('#log-out-btn');
  logOutBtn.addEventListener('click', logOutOnSubmit);
  return divElem;
};