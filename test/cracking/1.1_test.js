var expect = require('chai').expect;
var allUnique = require('../../cracking/1.1.js');

describe('allUnique', function() {
  it('returns true for unique chars', function() {
    expect(allUnique('abcd')).eql(true);
  });
  it('returns false for non-unique chars', function() {
    expect(allUnique('aa')).eql(false);
  });
});
