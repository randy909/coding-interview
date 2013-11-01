var expect = require('chai').expect;
var isRotation = require('../../cracking/1.8.js');

it ('should be a rotation', function () {
  expect(isRotation('randy', 'dyran')).eql(true);
  expect(isRotation('waterbottle', 'erbottlewat')).eql(true);
});

it ('should not be a rotation', function () {
  expect(isRotation('foo', '')).eql(false);
  expect(isRotation('randy', 'yndar')).eql(false);
  expect(isRotation('randy', 'randyk')).eql(false);
})
