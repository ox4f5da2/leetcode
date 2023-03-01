const code221 = `
/**
 * @param {character[][]} matrix
 * @return {number}
 */

function ifExist(array, i, j) {
  return !array[i] ? 0 : (array[i][j] ?? 0);
}

function createArray(row, column) {
  let array = [];
  for (let i = 0; i < row; i++) {
    array.push(new Array(column));
  }
  return array;
}

function maximalSquare(matrix) {
  const row = matrix.length, column = matrix[0].length;
  let dp = createArray(row, column), result = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (matrix[i][j] === "1") {
        let temp = Math.min(ifExist(dp, i - 1, j), ifExist(dp, i, j - 1), ifExist(dp, i - 1, j - 1)),
          min = (Math.sqrt(temp) + 1) ** 2;
        console.log(temp, min);
        dp[i][j] = min;
        result = min > result ? min : result;
        continue;
      }
      dp[i][j] = 0;
    }
  }
  return result;
};

console.log(maximalSquare([["1","1","1","1","0"],["1","1","1","1","0"],["1","1","1","1","1"],["1","1","1","1","1"],["0","0","1","1","1"]]));
`

module.exports = {
  code221
}