// Implement a MyQueue class which implements a queue using two stacks

// TODO: add implementation to reduce swapping
// We can get away with only having the swap in the remove().
// See the solution in the book.

var Stack = require('./stack.js');

function MyQueue() {
  this.addStack = new Stack();
  this.removeStack = new Stack();
}

MyQueue.prototype.add = function (value) {
  while (!this.removeStack.isEmpty())
    this.addStack.push(this.removeStack.pop());
  this.addStack.push(value);
}

MyQueue.prototype.remove = function () {
  while (!this.addStack.isEmpty())
    this.removeStack.push(this.addStack.pop());
  return this.removeStack.pop();
}

module.exports = MyQueue;
