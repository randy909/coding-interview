var expect = require('chai').expect;
var SetOfStacks = require('../../cracking/3.3.js');

it('pushes and pops', function() {
  var stack = new SetOfStacks(2);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  expect(stack.size).eql(5);
  expect(stack.stacks.length).eql(3)
  expect(stack.pop()).eql(5);
  expect(stack.pop()).eql(4);
  expect(stack.pop()).eql(3);
  expect(stack.pop()).eql(2);
  expect(stack.pop()).eql(1);
});
