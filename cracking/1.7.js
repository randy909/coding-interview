// TODO: This can be done without making a copy of the matrix.
// You do need some extra memory but not a whole copy of the matrix.
// Try to solve it without the matrix copy.
module.exports = function (matrix) {
  var copy = [];
  for (var ii = 0; ii < matrix.length; ++ii) {
    copy.push(matrix[ii].slice());
  }
  for (var ii = 0; ii < matrix.length; ++ii) {
    var row = matrix[ii];
    for (var xx = 0; xx < row.length; ++xx) {
      var element = row[xx];
      if (element === 0) {
        setColumnToZero(copy, xx);
        setRowToZero(copy[xx]);
      }
    }
  }
  function setColumnToZero(matrix, col) {
    for (var ii = 0; ii < matrix.length; ++ii) {
      matrix[ii][col] = 0;
    }
  }
  function setRowToZero(row) {
    for (var ii = 0; ii < row.length; ++ii) {
      row[ii] = 0;
    }
  }
  return copy;
}
