// So iterating backwards is much simpler but no fun.
// In javascript this fake, in-place approach makes no sense (immutable strings)
// but again, the other way is no fun
module.exports = function (str) {
  str = str.split('');
  var halfLen = Math.floor(str.length / 2);
  for (var idx = 0; idx < halfLen; ++idx) {
    var tmp = str[idx];
    var swapIdx = str.length - idx - 1;
    str[idx] = str[swapIdx];
    str[swapIdx] = tmp;
  }
  return str.join('');
}
