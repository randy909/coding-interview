var expect = require('chai').expect;
var LinkedList = require('../../cracking/2.2.js');

it('should return nth to last', function() {
  var list = new LinkedList();
  list.appendToTail('a');
  list.appendToTail('b');
  list.appendToTail('c');
  list.appendToTail('d');
  list.appendToTail('e');
  expect(list.nthToLast(0)).eql('e');
  expect(list.nthToLast(1)).eql('d');
  expect(list.nthToLast(4)).eql('a');
});
