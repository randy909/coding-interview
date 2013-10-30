// TODO: implement this the way the book shows - without making a new string
module.exports = function (str) {
  var out = '';
  for (var ii = 0; ii < str.length; ++ii) {
    if (str[ii] === ' ') {
      out += '%20';
    } else {
      out += str[ii];
    }
  }
  return out;
}
