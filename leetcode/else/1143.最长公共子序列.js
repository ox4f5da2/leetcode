const code1143 = `
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

function longestCommonSubsequence(text1, text2) {
  let dp = [], len1 = text1.length, len2 = text2.length;
  for (let i = 0; i < len1 + 1; i++) dp[i] = new Array(len2 + 1).fill(0);
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[len1][len2];
};

console.log(longestCommonSubsequence("bdcaba", "abcbdab"));
`

module.exports = {
  code1143
}