const nunjucks = require('nunjucks');

const test1 = nunjucks.renderString('Hello {{ username }}', { username: 'test1' });
console.assert(test1 === 'Hello test1', ['test1']);

const test2 = nunjucks.renderString('Hello {{ user.username }}', {
  user: {
    username: 'test2',
  },
});
console.assert(test2 === 'Hello test2', ['test2']);

const test22 = nunjucks.renderString('Hello {{ user["username"] }}', {
  user: {
    username: 'test22',
  },
});
console.assert(test22 === 'Hello test22', ['test22']);

const test3 = nunjucks.renderString('Hello {{ users[1].username }}', {
  users: [{
    username: 'test31',
  }, {
    username: 'test32',
  }],
});
console.assert(test3 === 'Hello test32', ['test3']);