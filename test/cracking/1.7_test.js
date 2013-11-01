var expect = require('chai').expect;
var zero = require('../../cracking/1.7.js');

it('should zero row and column', function () {
  var matrix = [
    [1,1,1,1],
    [1,1,1,1],
    [1,1,0,1],
    [1,1,1,1],
    [1,1,1,1]
  ];
  var expected = [
    [1,1,0,1],
    [1,1,0,1],
    [0,0,0,0],
    [1,1,0,1],
    [1,1,0,1]
  ];
  expect(zero(matrix)).eql(expected);
});
