const code64 = `
/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  let dp = []; // dp数组
  let [row, column] = [grid.length, grid[0].length];
  grid.forEach((item, index) => dp[index] = new Array(column));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i === 0 && j === 0) dp[0][0] = grid[0][0];
      else if (i === 0) dp[0][j] = dp[0][j - 1] + grid[0][j];
      else if (j === 0) dp[i][0] = dp[i - 1][0] + grid[i][0];
      else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[row - 1][column - 1];
};
`

module.exports = {
  code64
}