
function Queue () {
  this.enqueue = function (value) {
    if (!this.front) {
      this.last = { value: value };
      this.front = this.last;
    } else {
      this.last.next = { value: value }
      this.last = this.last.next;
    }
  }

  this.dequeue = function () {
    if (!this.front)
      return;
    var val = this.front.value;
    this.front = this.front.next;
    return val;
  }

  this.toArray = function () {
    var node = this.front;
    var arr = [];
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }
}

module.exports = Queue;
