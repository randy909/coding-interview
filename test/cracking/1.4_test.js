var expect = require('chai').expect;
var anagrams = require('../../cracking/1.4.js');

it('should be anagrams', function() {
  expect(anagrams('abc', 'bca')).eql(true);
  expect(anagrams('abc', 'abc')).eql(true);
  expect(anagrams('', '')).eql(true);
});

it('should not be anagrams', function () {
  expect(anagrams('abc', 'bce')).eql(false);
  expect(anagrams('abc', 'abcc')).eql(false);
  expect(anagrams('abc', 'abcd')).eql(false);
  expect(anagrams('abcd', 'abc')).eql(false);
});
