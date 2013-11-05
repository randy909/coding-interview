var expect = require('chai').expect;
var LinkedList = require('../../cracking/2.3.js');

it('should delete in a tricky way', function() {
  var list = new LinkedList();
  list.appendToTail('a');
  list.appendToTail('b');
  list.appendToTail('c');
  list.deleteTricky('b');
  expect(list.toArray()).eql(['a', 'c']);
});
