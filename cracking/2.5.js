// Given a circular linked list, implement an algorithm which returns node at
// the begin- ning of the loop
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node’s next pointer
// points to an earlier node, so as to make a loop in the linked list
// EXAMPLE
// input: A -> B -> C -> D -> E -> C [the same C as earlier]
// output: C

var LinkedList = require('./linkedList.js');

// Floyd's cycle finding algorithm or "tortoise and hare"
// The book's explanation is very hard to understand for the second part
// (detecting which node is the start of the loop by restarting the tortoise)
// Keep trying to wrap head around why this works.
module.exports = function findLoop(list) {
  var slow = fast = list.head;
  while (true) {
    if (slow === null || fast === null)
      return;
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast)
      break;
  }

  slow = list.head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast.value
}

// Working solution but not a good one.
// It will use O(n) memory because of the hashtable.
// Many approaches can be found here:
// http://ostermiller.org/find_loop_singly_linked_list.html
// module.exports = function findLoop(list) {
//   var existing = {};
//   var node = list.head;
//   while (node) {
//     if (existing[node.next.value])
//       return existing[node.next.value].value;
//     existing[node.value] = node;
//     node = node.next;
//   }
// }
