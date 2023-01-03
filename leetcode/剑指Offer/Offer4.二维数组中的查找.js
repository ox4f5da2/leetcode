const codeOffer4 = `
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function findNumberIn2DArray(matrix, target) {
  const row = matrix.length, column = matrix[0]?.length;
  if (!row && !column) return false;
  let i = 0, j = column - 1;
  while (i < row && j >= 0) {
    const temp = matrix[i][j];
    if (target === temp) return true;
    target < temp ? j-- : i++;
  }
  return false;
};

console.log(findNumberIn2DArray([[-5]], -5));
`

module.exports = {
  codeOffer4
}