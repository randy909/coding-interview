module.exports = function (str) {
  var arr = str.split('');
  for (var idx = 0; idx < arr.length; ++idx) {
    var current = arr[idx];
    for (var idy = idx + 1; idy < arr.length; ++idy) {
      if (current === arr[idy]) {
        arr[idy] = null;
      }
    }
  }
  return arr.join('');
}
