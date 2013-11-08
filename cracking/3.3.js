// Imagine a (literal) stack of plates If the stack gets too high, it might
// topple. Therefore, in real life, we would likely start a new stack when the
// previous stack exceeds some threshold. Implement a data structure SetOfStacks
// that mimics this. SetOfStacks should be composed of several stacks, and should
// create a new stack once the previous one exceeds capacity. SetOfStacks push()
// and SetOfStacks pop() should behave identically to a single stack (that is,
// pop() should return the same values as it would if there were just a single
// stack).
// FOLLOW UP
// Implement a function popAt(int index) which performs a pop operation on a
// specific sub-stack

var Stack = require('./stack.js');

function SetOfStacks(maxStackSize) {
  this.maxStackSize = maxStackSize;
  this.size = 0;
  this.stacks = [new Stack()];
}

SetOfStacks.prototype.stacksIdx = function () {
  return Math.floor(this.size / this.maxStackSize);
}

SetOfStacks.prototype.push = function (value) {
  this.stacks[this.stacksIdx()].push(value);
  this.size++;
  if (!this.stacks[this.stacksIdx()])
    this.stacks[this.stacksIdx()] = new Stack();
}

SetOfStacks.prototype.pop = function () {
  this.size--;
  // you could clean up the unused stacks here...
  return this.stacks[this.stacksIdx()].pop();
}

SetOfStacks.prototype.popAt = function (index) {
  // TODO: implement the followup question here
  // You need to re-implement without the size variable.
  // Instead use a stack with a size() function so you rollover
  // when stack[idx].size() > maxStackSize then you "pop" the last
  // stack when it becomes empty.
}

module.exports = SetOfStacks;
