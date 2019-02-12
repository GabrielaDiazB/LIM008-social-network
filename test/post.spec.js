import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc123: {
          content: 'Hola mundo',
          userId: 'abc',
          name: 'sofi',
          userPhoto: 'sofi.png',
          date: '11/02/19',
          like: 2,
          type: 'type'
        },
        abc128: {
          content: 'Hola mundo 123',
          userId: 'abc0123',
          name: 'gaby',
          userPhoto: 'gaby.png',
          date: '25/10/12',
          like: 1,
          type: 'privado'
        },
        abc129: {
          content: 'Hola mundo mali',
          userId: 'abcdefg',
          name: 'mali',
          userPhoto: 'mali.png',
          date: '20/10/12',
          like: 5,
          type: 'publico'
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
  privacyStatePost

} from '../src/controller-function/function-post.js';

describe('crear post', () => {
  it('debería agregar un post', (done) => {
    return addUserPostData('Hola mundo', 'abc', 'sofi', 'sofi.png', '11/02/19', 2, 'type')
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
        getPost(callback);
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
        getPost(callback);
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
        getPost(callback)
      });
  });
});

describe('privacyStatePost', () => {
  it('debería poder poner en privado o público el post indicado', (done) => {
    privacyStatePost('Público')
    .then(() => {
        const callback = (posts) => {
          const results = posts.find((post) => {
            return post.type === 'Público';
          });
          expect(results.type).toBe('Público');
          done();
        };
        privacyStatePost(type, callback);
      });
  });
});


