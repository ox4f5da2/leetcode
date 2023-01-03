const codeOffer14_2 = `
/**
 * @param {number} n
 * @return {number}
 */

function cuttingRope(n) {
  let dp = new Array(n + 1).fill(BigInt(0));
  dp[1] = dp[2] = 1n;
  for (let i = 2; i <= n; i++) {
    for (let j = 0, len = Math.floor(i >> 1); j <= len; j++) {
      const copyI = BigInt(i), copyJ = BigInt(j);
      let temp1 = dp[copyJ] < copyJ ? copyJ : dp[j], idx = copyI - copyJ;
      let temp2 = dp[idx] < idx ? idx : dp[idx];
      let res = temp1 * temp2;
      dp[i] = res > dp[i] ? res : dp[i];
    }
  }
  return dp[n] % BigInt(1e9 + 7);
};

console.log(cuttingRope(8));
`

module.exports = {
  codeOffer14_2
}