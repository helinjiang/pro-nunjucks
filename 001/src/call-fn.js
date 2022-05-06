const nunjucks = require('nunjucks');

const getName = (name) => {
  return `changed${name}`;
};

const test1 = nunjucks.renderString('Hello {{ username }} and {{ getName(username) }} and {{ getName("some") }}', {
  username: 'test1',
  getName
});
console.log('test1:', test1); // test1: Hello test1 and changedtest1 and changedsome

