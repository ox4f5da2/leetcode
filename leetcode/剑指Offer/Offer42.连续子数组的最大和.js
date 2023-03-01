const codeOffer42 = `
/**
 * @param {number[]} nums
 * @return {number}
 */

function maxSubArray(nums) {
  let dp = [nums[0]], result = nums[0];
  for (let i = 1, len = nums.length; i < len; i++) {
    let item = nums[i];
    dp[i] = Math.max(item, dp[i - 1] + item);
    result = Math.max(dp[i], result);
  }
  return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
`

module.exports = {
  codeOffer42
}