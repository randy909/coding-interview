
function Stack () {
  this.top = null;

  this.push = function (value) {
    this.top = {
      value: value,
      next: this.top
    };
  }

  this.pop = function () {
    if (!this.top)
      return;
    var value = this.top.value;
    this.top = this.top.next;
    return value;
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
}

module.exports = Stack;
