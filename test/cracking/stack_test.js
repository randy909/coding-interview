var expect = require('chai').expect;
var Stack = require('../../cracking/stack.js');

it('pushes and pops', function() {
  var stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.toArray()).eql([3,2,1]);
  expect(stack.pop()).eql(3);
  expect(stack.pop()).eql(2);
  expect(stack.pop()).eql(1);
});

it('can pop an empty stack', function() {
  var stack = new Stack();
  expect(stack.pop()).eql(undefined);
});
