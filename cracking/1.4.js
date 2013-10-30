module.exports = function (left, right) {
  // Easy solution
  // return left.split('').sort().toString() === right.split('').sort().toString();

  var leftMap = getCharMap(left);
  var rightMap = getCharMap(right);
  if (leftMap.length !== rightMap.length)
    return false;
  for (var ii = 0; ii < leftMap.length; ++ii) {
    if (leftMap[ii] !== rightMap[ii]) return false;
  }
  return true;

  function getCharMap(str) {
    var map = [];
    for (var ii = 0; ii < str.length; ++ii) {
      var code = str.charCodeAt(ii);
      var mapCode = map[code];
      if (!mapCode)
        map[code] = mapCode = 0;
      map[code] = mapCode + 1;
    }
    return map;
  }
}
