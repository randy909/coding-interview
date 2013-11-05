// Implement an algorithm to delete a node in the middle of a single linked list,
// given only access to that node
// EXAMPLE
// Input: the node ‘c’ from the linked list a->b->c->d->e
// Result: nothing is returned, but the new linked list looks like a->b->d->e

var LinkedList = require('./linkedList.js');

LinkedList.prototype.deleteTricky = function (value) {
  var node = this.head;
  while (node) {
    if (node.value === value) {
      node.value = node.next.value;
      node.next = node.next.next;
    }
    node = node.next;
  }
}

module.exports = LinkedList;
