var expect = require('chai').expect;
var LinkedList = require('../../cracking/linkedList.js');
var addLists = require('../../cracking/2.4.js');

it('adds digits in linked lists', function () {
  var l1 = new LinkedList();
  l1.appendToTail(3);
  l1.appendToTail(1);
  l1.appendToTail(5);
  var l2 = new LinkedList();
  l2.appendToTail(5);
  l2.appendToTail(9);
  l2.appendToTail(2);
  expect(addLists(l1, l2).toArray()).eql([8,0,8]);
});
