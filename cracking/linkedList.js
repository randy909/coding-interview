function Node(value, next) {
  this.value = value;
  this.next = next;
}

function LinkedList() {
  this.head = null;

  this.appendToTail = function (value) {
    if (!this.head) {
      this.head = new Node(value, null);
    } else {
      var tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = new Node(value, null);
    }
  }

  this.deleteNode = function (value) {
    if (this.head.value === value) {
      if (!this.head.next) {
        this.head = null;
      } else {
        this.head = this.head.next;
      }
      return;
    }
    var node = this.head;
    while (node.next) {
      if (node.next.value === value) {
        node.next = node.next.next;
        return;
      }
      node = node.next;
    }
  }

  this.toArray = function () {
    var arr = [];
    var node = this.head;
    if (!node) return arr;
    while (node.next) {
      arr.push(node.value);
      node = node.next;
    }
    arr.push(node.value);
    return arr;
  }
}

module.exports = LinkedList;
