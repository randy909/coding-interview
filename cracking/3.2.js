// How would you design a stack which, in addition to push and pop, also has
// a function min which returns the minimum element? Push, pop and min should
// all operate in O(1) time

// TODO: try the alternate solution, although I like this one better
// probably because I thought of it :)

function MinStack() {
  this.top = null;
  this.minTop = null;
}

MinStack.prototype.push = function (value) {
  this.top = {
    next: this.top,
    value: value
  };
  if (!this.minTop || this.minTop.value >= value) {
    this.minTop = {
      next: this.minTop,
      value: value
    }
  }
}

MinStack.prototype.pop = function () {
  var value = this.top.value;
  this.top = this.top.next;
  if (value === this.minTop.value)
    this.minTop = this.minTop.next;
  return value;
}

MinStack.prototype.min = function () {
  if (!this.minTop)
    return;
  return this.minTop.value;
}

module.exports = MinStack;
