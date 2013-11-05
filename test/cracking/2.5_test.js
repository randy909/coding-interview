var expect = require('chai').expect;
var findLoop = require('../../cracking/2.5.js');
var LinkedList = require('../../cracking/linkedList.js');

function createLoop(list, value) {
  var tail = list.tail();
  var loopNode = list.findFirstNode(value);
  tail.next = loopNode;
}

it('should find node at beginning of loop', function() {
  var list = new LinkedList();
  list.appendToTail('a');
  list.appendToTail('b');
  list.appendToTail('c');
  list.appendToTail('d');
  list.appendToTail('e');
  createLoop(list, 'c');
  expect(findLoop(list)).eql('c');
});
