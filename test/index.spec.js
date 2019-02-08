import MockFirebase from 'mock-cloud-firestore';
const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc123: {
          content: 'Hola mundo',
        },
      }
    }
  }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { addPostOnSubmit, getPost } from '../src/view-controller.js';
import writePost from '../src/templates/template-login.js';
describe('crear post', () => {
  it('debería agregar un post', (done) => {
    return addPostOnSubmit('Hola mundo')
    .then(() => getPost(
    (data) => {
      const results = data.find((post) => post.content === 'Hola mundo')
      expect(results.title).toBe('Hola mundo');
      done()
     }
     ))
   })
});