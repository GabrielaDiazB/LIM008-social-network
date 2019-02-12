import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc123: {
          content: 'Hola mundo',
          userId: 'abc'
        },
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { 
  addUserPostData,
  getPost,
  updatePost,
  // deletePost,
} from '../src/controller-function/function-post.js';

describe('crear post', () => {
  it('debería agregar un post', (done) => {
    return addUserPostData('Hola mundo')
      .then(() => getPost(
        (data) => {
          const results = data.find((post) => post.content === 'Hola mundo');
          expect(results.content).toBe('Hola mundo');
          done();
        }
      ));
  });
  it('debería poder eliminar el post indicado', (done) => {
    return deletePost('abc123')
      .then(() => getPost(
        (data) => {
          const results = data.find((post) => post.id === 'abc123');
          expect(results).toBe(undefined);
          done();
        }
      ));
  });
  it('debería poder editar el post indicado'), (done) => {
    return updatePost('abc123')
      .then(() => getPost(
        (data) => {
          const results = data.find((post) => post.id === 'abc123');
          expect(results).toBe('sisdjk');
          done();
        }
      ));
  }; 
});
