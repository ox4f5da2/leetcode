const code198 = `
/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  let dp = [];
  nums.forEach((item, index) => {
    if (index === 0) dp[0] = item;
    else if (index === 1) dp[1] = dp[0] > item ? dp[0] : item;
    else dp[index] = Math.max(dp[index - 2] + item, dp[index - 1]);
  })
  return dp[dp.length - 1];
};

function rob(nums) {
  let dp = [], len = nums.length;
  if (len === 1) return nums[0];
  dp.push(nums[0], Math.max(nums[0], nums[1]));
  if (len === 2) return dp[len - 1];
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }
  return dp[len - 1];
};

console.log(rob([1, 2, 4, 2, 2, 7, 3]));
`

module.exports = {
  code198
}