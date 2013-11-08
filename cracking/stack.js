
function Stack () {
  this.top = null;

  this.push = function (value) {
    this.top = {
      value: value,
      next: this.top
    };
  }

  this.pop = function () {
    if (this.isEmpty())
      return;
    var value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  this.peek = function () {
    if (this.isEmpty())
      return;
    return this.top.value;
  }

  this.toArray = function () {
    var node = this.top;
    var arr = [];
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }

  this.isEmpty = function () {
    return !this.top;
  }
}

module.exports = Stack;
