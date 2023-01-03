const code213 = `
/**
 * @param {number[]} nums
 * @return {number}
 */

// 最后一个偷的话，那么范围就是从[1, n - 1]
// 最后一个不偷的话，那么范围就是从[0, n - 2]
// 只要将这两个范围分别做一次[198.打家劫舍]那样的操作
// 然后对比两次选最大的即可
function robHelp(nums) {
  let dp = [], len = nums.length;
  if (len === 1) return nums[0];
  dp.push(nums[0], Math.max(nums[0], nums[1]));
  if (len === 2) return dp[len - 1];
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }
  return dp[len - 1];
};

function rob(nums) {
  let len = nums.length;
  if (len === 1) return nums[0];
  return Math.max(robHelp(nums.slice(0, len - 1)) ,robHelp(nums.slice(1)));
};

console.log(rob([1, 2, 3]));
`

module.exports = {
  code213
}