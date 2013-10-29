var expect = require('chai').expect;
var unique = require('../../cracking/1.3.js');

it('should return unique characters', function() {
  expect(unique('aabbcc')).eql('abc');
  expect(unique('aabcaa')).eql('abc');
  expect(unique('aaaaaa')).eql('a');
  expect(unique('abc')).eql('abc');
  expect(unique('')).eql('');
});
