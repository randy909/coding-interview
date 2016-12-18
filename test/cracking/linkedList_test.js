const expect = require('chai').expect;
const LinkedList = require('../../cracking/linkedList.js');

describe('appendToTail', function() {
  it('should append to tail', function() {
    const list = new LinkedList();
    list.appendToTail(14);
    list.appendToTail(2);
    expect(list.toArray()).eql([14, 2]);
  });
});

describe('deleteNode', function () {
  it('should delete the head item', function () {
    const list = new LinkedList();
    list.appendToTail(14);
    list.appendToTail(4);
    list.deleteNode(14);
    expect(list.toArray()).eql([4]);
  });

  it('should delete an item', function () {
    const list = new LinkedList();
    list.appendToTail(14);
    list.appendToTail(4);
    list.appendToTail(5);
    list.deleteNode(4);
    expect(list.toArray()).eql([14, 5]);
  });

  it('should delete the only item', function () {
    const list = new LinkedList();
    list.appendToTail(14);
    list.deleteNode(14);
    expect(list.toArray()).eql([]);
  });
});
