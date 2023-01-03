const codeOffer14_1 = `
/**
 * @param {number} n
 * @return {number}
 */

function cuttingRope(n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = dp[2] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0, len = Math.floor(i >> 1); j <= len; j++) {
      let temp1 = dp[j] < j ? j : dp[j], idx = i - j;
      let temp2 = dp[idx] < idx ? idx : dp[idx];
      let res = temp1 * temp2;
      dp[i] = res > dp[i] ? res : dp[i];
    }
  }
  return dp[n];
};

console.log(cuttingRope(8));
`

module.exports = {
  codeOffer14_1
}