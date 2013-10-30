var expect = require('chai').expect;
var rotate = require('../../cracking/1.6.js');

it('rotates', function() {
  var image = [
    [10,20,30,40],
    [50,60,70,80],
    [90,11,21,31],
    [41,51,61,71]
  ];
  var rotatedImage = [
    [41,90,50,10],
    [51,11,60,20],
    [61,21,70,30],
    [71,31,80,40]
  ];
  expect(rotate(image)).eql(rotatedImage);
});

it('rotates a 5x5 matrix', function() {
  var image = [
    ['a','b','c','d','e'],
    ['f','g','h','i','j'],
    ['k','l','m','n','o'],
    ['p','q','r','s','t'],
    ['u','v','w','x','y']
  ];
  var rotatedImage = [
    ['u','p','k','f','a'],
    ['v','q','l','g','b'],
    ['w','r','m','h','c'],
    ['x','s','n','i','d'],
    ['y','t','o','j','e']
  ];
  expect(rotate(image)).eql(rotatedImage);
});
