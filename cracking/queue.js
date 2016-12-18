
class Queue {
  enqueue(value) {
    if (!this.front) {
      this.last = { value: value };
      this.front = this.last;
    } else {
      this.last.next = { value: value }
      this.last = this.last.next;
    }
  }

  dequeue() {
    if (!this.front)
      return;
    const val = this.front.value;
    this.front = this.front.next;
    return val;
  }

  toArray() {
    let node = this.front;
    const arr = [];
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }
}

module.exports = Queue;
