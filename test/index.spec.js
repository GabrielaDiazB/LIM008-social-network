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
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { addPostOnSubmit, deletePostOnSubmit } from '../src/view-controller.js';
import {getPost} from '../src/controller-function/function-firebase.js';
describe('crear post', () => {
  it('debería agregar un post', (done) => {
    return addPostOnSubmit('Hola mundo')
      .then(() => getPost(
        (data) => {
          const results = data.find((post) => post.content === 'Hola mundo');
          expect(results).toBe('Hola mundo');
          done();
        }
      ));
  });
  it('debería poder eliminar el post indicado', (done) => {
    return deletePostOnSubmit('abc123')
      .then(() => getPost(
        (data) => {
          const results = data.find((post) => post.id === 'abc123');
          expect(results).toBe(undefined);
          done();
        }
      ));
  }); 
});

