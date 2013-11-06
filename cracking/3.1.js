// Describe how you could use a single array to implement three stacks

// TODO: refactor to cover error conditions (push too many, pop too many)
// TODO: refactor to get rid of all of the duplicated code
// TODO: Try the other approach in the book
// TODO: Try an approach where every third item is a separate stack

function TripleStack (size) {
  this.arr = new Array(size * 3);
  this.arr1Back = 0;
  this.arr2Back = size;
  this.arr3Back = size * 2;

  this.push1 = function (value) {
    // if (this.arr1Back >= size)
    //   return;
    this.arr[this.arr1Back] = value;
    this.arr1Back++;
  }

  this.push2 = function (value) {
    this.arr[this.arr2Back] = value;
    this.arr2Back++;
  }

  this.push3 = function (value) {
    this.arr[this.arr3Back] = value;
    this.arr3Back++;
  }

  this.pop1 = function () {
    if (this.arr1Back === 0)
      return;
    this.arr1Back--;
    return this.arr[this.arr1Back];
  }

  this.pop2 = function () {
    if (this.arr2Back === 0)
      return;
    this.arr2Back--;
    return this.arr[this.arr2Back];
  }

  this.pop3 = function () {
    if (this.arr3Back === 0)
      return;
    this.arr3Back--;
    return this.arr[this.arr3Back];
  }
}

module.exports = TripleStack;
