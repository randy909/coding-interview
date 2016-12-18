class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  appendToTail(value) {
    if (!this.head) {
      this.head = new Node(value, null);
    } else {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = new Node(value, null);
    }
  }

  deleteNode(value) {
    if (this.head.value === value) {
      if (!this.head.next) {
        this.head = null;
      } else {
        this.head = this.head.next;
      }
      return;
    }
    let node = this.head;
    while (node.next) {
      if (node.next.value === value) {
        node.next = node.next.next;
        return;
      }
      node = node.next;
    }
  }

  toArray() {
    const arr = [];
    let node = this.head;
    if (!node) return arr;
    while (node.next) {
      arr.push(node.value);
      node = node.next;
    }
    arr.push(node.value);
    return arr;
  }

  findFirstNode(value) {
    let node = this.head;
    while (node) {
      if (node.value === value)
        return node;
      node = node.next;
    }
  }

  tail() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
}

module.exports = LinkedList;
