const codeOffer49 = `
/**
 * @param {number} n
 * @return {number}
 */

function nthUglyNumber(n) {
  let dp = [1], p2 =0,  p3 = 0, p5 = 0;
  for (let i = 1; i < n; i++) {
    let num2 = dp[p2] * 2, num3 = dp[p3] * 3, num5 = dp[p5] * 5;
    dp[i] = Math.min(num2, num3, num5);
    if (num2 === dp[i]) p2++;
    if (num3 === dp[i]) p3++;
    if (num5 === dp[i]) p5++;
  }
  return dp[n - 1];
};

console.log(nthUglyNumber(10));
`

module.exports = {
  codeOffer49
}