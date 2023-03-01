const code62 = `
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 求阶乘
function factorial(n) {
  return [...(new Array(n)).keys()].map(idx => idx + 1).reduce((pre, curr) => pre *= curr, 1);
};
// 每条路径的长度为 m + n - 2
function uniquePaths(m, n) {
  return factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1));
};
console.log(uniquePaths(3, 7));
`

module.exports = {
  code62
}

function genArray(m, n) {
  const result = [];
  for (let i = 0; i < m; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      result[i][j] = 0;
    }
  }
  return result;
}

function ifExist(array, i, j) {
  return array[i] && array[i][j];
}

function uniquePaths(m, n) {
  let dp = genArray(m, n);
  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      dp[i][j] = (ifExist(dp, i - 1, j) ?? 0) + (ifExist(dp, i, j - 1) ?? 0);
    }
  }
  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 3));