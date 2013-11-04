// Write code to remove duplicates from an unsorted linked list
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?

// I skipped the hashtable solution because that's easy.
// This solution misses an optimization seen in one of the problems from chapter 1.
// Rather than scan from zero to the end looking for dupes in the inner loop
// you scan from zero to your current position. This way you can short-circuit
// the inner loop when you hit a duplicate rather than dumbly iterate the worst-case.
// This approach says "everything before current will be unique at the end of
// the inner loop".
// Caveat: the short-circuit approach requires more code to accomplish.
// TODO: Implement with the short-circuiting solution from the book

var LinkedList = require('./linkedList.js');

LinkedList.prototype.removeDuplicates = function () {
  var node = this.head;
  while (node && node.next) {
    var innerNode = node;
    while (innerNode && innerNode.next) {
      if (node.value === innerNode.next.value) {
        innerNode.next = innerNode.next.next;
      }
      innerNode = innerNode.next;
    }
    node = node.next;
  }
}

module.exports = LinkedList;
