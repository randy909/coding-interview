var expect = require('chai').expect;
var LinkedList = require('../../cracking/2.1.js');

it('should remove duplicates', function() {
  var list = new LinkedList();
  list.appendToTail(10);
  list.appendToTail(12);
  list.appendToTail(10);
  list.appendToTail(12);
  list.removeDuplicates();
  expect(list.toArray()).eql([10,12]);
});
