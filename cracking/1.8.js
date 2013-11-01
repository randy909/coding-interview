module.exports = function (str1, str2) {
  if (str1.length !== str2.length)
    return false;
  var matchStr = str1 + str1;
  return new RegExp(str2).test(matchStr);
}
