const code747 = `
/**
 * @param {number[]} nums
 * @return {number}
 */

function dominantIndex(nums) {
  let result = 0, max = 0, index = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    const item = nums[i];
    if (item > max) {
      max = item;
      index = i;
    }
  }
  for (let i = 0, len = nums.length; i < len; i++) {
    const item = nums[i];
    if (item === max) continue;
    if (max / item < 2) return -1;
  }
  return index;
};

console.log(dominantIndex([3]));
`

module.exports = {
  code747
}