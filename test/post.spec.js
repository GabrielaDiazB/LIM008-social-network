import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc123: {
          content: 'Hola mundo',
          userId: 'abc',
          name: 'getNameUser',
          userPhoto: 'getPhotoUser',
          date: '11',
          like: '2',
          filter: 'type'
        },
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { 
  addUserPostData,
  getPost,
  deletePost,
  likesPost
} from '../src/controller-function/function-post.js';

describe('crear post', () => {
  it('debería agregar un post', (done) => {
    return addUserPostData('Hola mundo', 'abc', 'getUserName', 'getPhotoUser', '11', '2', 'type')
      .then((data) => { 
        const callback = (posts) => {   
          const results = posts.find(post => { 
            return post.content === 'Hola mundo';
          });
          expect(results.content).toEqual('Hola mundo');
          done();
        };
        getPost(callback);
      });
  });
});
it('debería poder eliminar el post indicado', (done) => {
  return deletePost('abc123')
    .then(() => {
      const callback = (posts) => {
        const results = posts.find((post) => {
          return post.id === 'abc123';
        });
        expect(results).toBe(undefined);
        done();
      };
      getPost(callback);
    });
});
it('debería poder dar likes a un post', (done) => {
  return likesPost('abc123', 2).then(() => {
    const callback = (posts) => {
      const results = posts.find((post) => {
        return post.id === 'abc123';
      });
      expect(results.like).toBe(2);
      done();
    };
    getPost(callback);
  });
});  


