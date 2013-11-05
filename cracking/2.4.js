// You have two numbers represented by a linked list, where each node contains
// a single digit The digits are stored in reverse order, such that the 1’s
// digit is at the head of the list Write a function that adds the two numbers
// and returns the sum as a linked list
// EXAMPLE
// Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
// Output: 8 -> 0 -> 8

var LinkedList = require('./linkedList.js');

// I think this will break if the lists have different number of digits.
// TODO: make it work with different numbers of digits.
// TODO: Try to make it recursive like the book's solution.

module.exports = function (list1, list2) {
  var l1Node = list1.head;
  var l2Node = list2.head;
  var outList = new LinkedList();
  var carry = 0;
  while (l1Node || l2Node) {
    var sum = l1Node.value + l2Node.value;
    var sumGtTen = (sum >= 10);
    if (sumGtTen) {
      sum -= 10;
    }
    outList.appendToTail(sum + carry);
    if (sumGtTen) {
      carry = 1;
    } else {
      carry = 0;
    }
    l1Node = l1Node.next;
    l2Node = l2Node.next;
  }
  return outList;
}
