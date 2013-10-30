module.exports = function (str) {
  var arr = str.split('');
  var tail = 1;
  for (var outer = 1; outer < arr.length; ++outer) {
    var inner = 0;
    // scan to see if we already saw this character before
    for (; inner < tail; ++inner) {
      if (arr[outer] === arr[inner]) break;
    }
    // if we didn't find a duplicate of arr[outer]
    if (inner === tail) {
      arr[tail] = arr[outer];
      ++tail;
    }
  }
  arr.splice(tail, Number.MAX_VALUE);
  return arr.join('');
}

// TODO: implement the alternate version of this algo
