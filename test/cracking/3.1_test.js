var expect = require('chai').expect;
var TripleStack = require('../../cracking/3.1.js');

it ('should push1 and pop1', function () {
  var stack = new TripleStack(2);
  stack.push1(9);
  stack.push1(8);
  expect(stack.pop1()).eql(8);
  expect(stack.pop1()).eql(9);
});

it ('should push2 and pop2', function () {
  var stack = new TripleStack(2);
  stack.push2(9);
  stack.push2(8);
  expect(stack.pop2()).eql(8);
  expect(stack.pop2()).eql(9);
});

it ('should push3 and pop3', function () {
  var stack = new TripleStack(2);
  stack.push3(9);
  stack.push3(8);
  expect(stack.pop3()).eql(8);
  expect(stack.pop3()).eql(9);
});
