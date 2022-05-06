var nunjucks = require('nunjucks');

var env = new nunjucks.Environment();

env.addFilter('shorten', function(str, count) {
  return str.slice(0, count || 5);
});
//
// const test1 = nunjucks.renderString('Hello {{ username|shorten }}', {
//   username: 'test1',
// });

var template = nunjucks.compile('{{ "  foo " | trim }}');
const test1 =template.render({ username: 'James' });

console.log('test1:', test1); // test1: Hello test1 and changedtest1 and changedsome


// var nunjucks = require('nunjucks');
// var env = new nunjucks.Environment();
//
// env.addFilter('shorten', function(str, count) {
//   return str.slice(0, count || 5);
// });
//
// A message for you: {{ message|shorten }}