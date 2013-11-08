// In the classic problem of the Towers of Hanoi, you have 3 rods and N disks
// of different sizes which can slide onto any tower. The puzzle starts with disk
// ssorted in ascending order of size from top to bottom (e g , each disk sits
// on top of an even larger one).
// You have the following constraints:
// (A) Only one disk can be moved at a time
// (B) A disk is slid off the top of one rod onto the next rod
// (C) A disk can only be placed on top of a larger disk
// Write a program to move the disks from the first rod to the last using Stacks

// TODO: try this recursively
// The book absurdly suggests this is a 'natural' recursive algorithm.
// I find the solution here far easier to understand than the book's.
// Still, it's good to have practice with these funky algos...

var Stack = require('./stack.js');

function Tower(size) {
  this.size = size;
  this.first = new Stack();
  this.middle = new Stack();
  this.last = new Stack();
  for (var ii = size; ii > 0; --ii)
    this.first.push(ii);
}

function solveIt(aa, bb, cc) {
  function legalMove(one, two) {
    if ((!one.peek() && two.peek()) || one.peek() > two.peek()) {
      one.push(two.pop());
    } else if (one.peek()) {
      two.push(one.pop());
    }
  }
  var count = 0;
  while (aa.peek() || bb.peek()) {
    legalMove(aa, bb);
    legalMove(aa, cc);
    legalMove(bb, cc);
  }
}

Tower.prototype.solve = function () {
  solveIt(this.first, this.middle, this.last);
}

Tower.prototype.firstTower = function () {
  return this.first.toArray();
}

Tower.prototype.middleTower = function () {
  return this.middle.toArray();
}

Tower.prototype.lastTower = function () {
  return this.last.toArray();
}

module.exports = Tower;
