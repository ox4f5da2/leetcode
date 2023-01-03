const code74 = `
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function transfer(idx, column) {
  return [Math.floor(idx / column), idx % column];
}

var searchMatrix = function (matrix, target) {
  let row = matrix.length, column = matrix[0].length;
  let left = 0, right = row * column - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let [i, j] = transfer(mid, column);
    if (matrix[i][j] >= target) right = mid;
    else left = mid + 1;
  }
  let [i, j] = transfer(left, column);
  return matrix[i][j] === target
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 4));
`

module.exports = {
  code74
}