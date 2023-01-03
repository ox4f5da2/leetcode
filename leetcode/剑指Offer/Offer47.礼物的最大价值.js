const codeOffer47 = `
/**
 * @param {number[][]} grid
 * @return {number}
 */

function initGrid(row, column) {
  let array = [];
  for (let i = 0; i < row; i++) array.push(new Array(column));
  return array;
}

function ifExist(array, i, j) {
  return array[i] && array[i][j];
}

function maxValue(grid) {
  let row = grid.length, column = grid[0].length, dp = initGrid(row, column);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      dp[i][j] = Math.max(
        ifExist(dp, i - 1, j) ?? 0,
        ifExist(dp, i, j - 1) ?? 0
      ) + grid[i][j];
    }
  }
  return dp[row - 1][column - 1];
};

console.log(maxValue([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]));
`

module.exports = {
  codeOffer47
}