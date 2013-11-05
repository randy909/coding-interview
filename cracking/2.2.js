// Implement an algorithm to find the nth to last element of a singly linked list

var LinkedList = require('./linkedList.js');

// TODO: do a recursive solution as suggested by the book

LinkedList.prototype.nthToLast = function (nth) {
  var leader = this.head;
  var follower = this.head;
  for (var ii = 0; ii < nth; ++ii) {
    if (!leader) return undefined;
    leader = leader.next;
  }
  while (leader.next) {
    leader = leader.next;
    follower = follower.next;
  }
  return follower ? follower.value : undefined;
}

// This was my first attempt. Pretty simple but not what they were looking for.
// LinkedList.prototype.nthToLast = function (nth) {
//   var length = 0;
//   var node = this.head;
//   while (node) {
//     ++length;
//     node = node.next;
//   }
//   node = this.head;
//   for (var ii =  1; ii < length - nth; ++ii) {
//     node = node.next;
//   }
//   return node ? node.value : undefined;
// }

module.exports = LinkedList;
