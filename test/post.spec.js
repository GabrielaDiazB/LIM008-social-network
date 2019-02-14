import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc1234: {
          content: 'Hola mundo',
          userId: 'abc1234',
          name: 'sofi',
          userPhoto: 'sofi.png',
          date: '11/02/19',
          like: 2,
          favorite: 2,
          privacy: 'Privado'
        },
        abc128: {
          content: 'Hola mundo 123',
          userId: 'abc0123',
          name: 'gaby',
          userPhoto: 'gaby.png',
          date: '25/10/12',
          like: 1,
          favorite: 0,
          privacy: 'publico'
        },
        abc129: {
          content: 'Hola mundo mali',
          userId: 'abcdefg',
          name: 'mali',
          userPhoto: 'mali.png',
          date: '20/10/12',
          like: 5,
          favorite: 0,
          privacy: 'publico'
        }
      },
    },
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { 
  addUserPostData,
  getPost,
  updatePost,
  deletePost,
  likesPost,
  favoritesPost } from '../src/controller-function/function-post.js';


describe('crear post', () => {
  it('debería agregar un post', (done) => {
    return addUserPostData('Hola mundo', 'abc1234', 'sofi', 'sofi.png', '11/02/19', 2, '´Privado')
      .then(() => { 
        const callback = (posts) => {   
          const results = posts.find(post => { 
            return post.content === 'Hola mundo';
          });
          expect(results.content).toEqual('Hola mundo');
          done();
        };
        getPost(callback, 'mali@gmail.com');
      });
  });
});

describe('updatePost', () => {
  it('debería poder editar el post indicado', (done) => {
    updatePost('abc128', 'Hola mundo 12356')
      .then(() => {
        const callback = (posts) => {
          const results = posts.find((post) => {
            return post.id === 'abc128';
          });
          expect(results.content).toBe('Hola mundo 12356');
          done();
        };
        getPost(callback, 'mali@gmail.com');
      });
  }); 
});

describe('likePost', () => {
  it('debería poder dar likes al post indicado', (done) => {
    likesPost('abc128', 2)
      .then(() => {
        const callback = (posts) => {
          const results = posts.find((post) => {
            return post.id === 'abc128';
          });
          expect(results.like).toBe(2);
          done();
        };
        getPost(callback, 'mali@gmail.com');
      });
  }); 
});

describe('favoritePost', () => {
  it('debería poder dar likes al post indicado', (done) => {
    favoritesPost('abc128', 0)
      .then(() => {
        const callback = (posts) => {
          const results = posts.find((post) => {
            return post.id === 'abc128';
          });
          expect(results.favorite).toBe(0);
          done();
        };
        getPost(callback, 'mali@gmail.com');
      });
  }); 
});

describe('deletePost', () => {
  it('debería poder eliminar el post indicado', (done) => {
    deletePost('abc123')
      .then(() => {
        const callback = (posts) => {
          const results = posts.find((post) => {
            return post.id === 'abc123';
          });
          expect(results).toBe(undefined);
          done();
        };
        getPost(callback, null);
      });
  });
});


