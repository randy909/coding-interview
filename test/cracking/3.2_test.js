var expect = require('chai').expect;
var MinStack = require('../../cracking/3.2.js');

it('should return smallest', function() {
  var stack = new MinStack();
  stack.push(5);
  stack.push(2);
  stack.push(2);
  stack.push(9);
  stack.push(1);
  stack.push(8);
  expect(stack.min()).eql(1);
  expect(stack.pop()).eql(8);
  expect(stack.pop()).eql(1);
  expect(stack.min()).eql(2);
  expect(stack.pop()).eql(9);
  expect(stack.pop()).eql(2);
  expect(stack.min()).eql(2);
  expect(stack.pop()).eql(2);
  expect(stack.min()).eql(5);
});
