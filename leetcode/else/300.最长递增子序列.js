const code300 = `
/**
 * @param {number[]} nums
 * @return {number}
 */

function lengthOfLIS(nums) {
  let result = 1, dp = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    let temp = nums[i], max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < temp) max = Math.max(dp[j], max);
    }
    dp[i] = max + 1;
    result = Math.max(result, dp[i]);
  }
  return result;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
`

module.exports = {
  code300
}