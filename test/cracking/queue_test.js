var expect = require('chai').expect;
var Queue = require('../../cracking/queue.js');

it('enqueues and dequeues', function() {
  var queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.toArray()).eql([1,2,3]);
  expect(queue.dequeue()).eql(1);
  expect(queue.dequeue()).eql(2);
  expect(queue.dequeue()).eql(3);
});

it('can dequeue an empty queue', function() {
  var queue = new Queue();
  expect(queue.dequeue()).eql(undefined);
  queue.enqueue(3);
  queue.dequeue();
  expect(queue.dequeue()).eql(undefined);
});
