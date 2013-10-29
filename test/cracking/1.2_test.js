var expect = require('chai').expect;
var reverse = require('../../cracking/1.2.js');

it('reverses string', function() {
  expect(reverse('abcde')).eql('edcba');
  expect(reverse('abcd')).eql('dcba');
  expect(reverse('')).eql('');
});
