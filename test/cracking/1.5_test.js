var expect = require('chai').expect;
var space = require('../../cracking/1.5.js');

it('should make %20 from spaces', function () {
  expect(space('a b c')).eql('a%20b%20c');
  expect(space('  ')).eql('%20%20');
  expect(space('')).eql('');
});
