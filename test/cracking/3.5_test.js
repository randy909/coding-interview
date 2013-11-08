var expect = require('chai-stack').expect;
var MyQueue = require('../../cracking/3.5.js');

it('adds and removes', function() {
  var queue = new MyQueue();
  queue.add(1);
  queue.add(2);
  queue.add(3);
  expect(queue.remove()).eql(1);
  expect(queue.remove()).eql(2);
  expect(queue.remove()).eql(3);
  expect(queue.remove()).eql(undefined);
});
