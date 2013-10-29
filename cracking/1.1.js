
module.exports = function (str) {
  var arr = [];
  for (var idx = 0; idx < str.length; ++idx) {
    var charCode = str.charCodeAt(idx);
    if (arr[charCode]) {
      return false;
    }
    arr[charCode] = true;
  }
  return true;
}
