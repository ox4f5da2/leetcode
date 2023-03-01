const code228 = `
/**
 * @param {number[]} nums
 * @return {string[]}
 */

function summaryRanges(nums) {
  let result = [], left = 0, right = 0, len = nums.length;
  while (right < len) {
    while (nums[left] + right - left === nums[right]) right++;
    result.push(left === right - 1 ? \`${nums[left]}\` : \`${nums[left]}->${nums[right - 1]}\`);
    left = right;
  }
  return result;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
`

module.exports = {
  code228
}