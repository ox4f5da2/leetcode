const code209 = `
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

function minSubArrayLen(target, nums) {
  const idx = nums.length - 1;
  let p1 = 0, p2 = 0, sum = 0, result = Infinity;
  while (p1 <= idx) {
    while (p2 <= idx && sum < target) {
      sum += nums[p2];
      p2++;
    }
    if (sum >= target) {
      result = Math.min(result, p2 - p1);
    }
    sum -= nums[p1];
    p1++;
  }
  return result === Infinity ? 0 : result;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
`

module.exports = {
  code209
}