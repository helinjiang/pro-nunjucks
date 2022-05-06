const nunjucks = require('nunjucks');

const test1 = nunjucks.renderString('Hello {{ username }}', { username: 'test1' });
console.log('test1:', test1); // test1: Hello test1

const test2 = nunjucks.renderString('Hello {{ user.username }}', {
  user: {
    username: 'test2',
  },
});
console.log('test2:', test2); // test2: Hello test2

const test3 = nunjucks.renderString('Hello {{ users[1].username }}', {
  users: [{
    username: 'test31',
  }, {
    username: 'test32',
  }],
});
console.log('test3:', test3); // test3: Hello test32