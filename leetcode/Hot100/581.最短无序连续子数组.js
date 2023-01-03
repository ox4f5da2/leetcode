const code581 = `
/**
 * @param {number[]} nums
 * @return {number}
 */

// 排序
function findUnsortedSubarray(nums) {
  let copy = [...nums].sort((a, b) => a - b);
  let len = nums.length, left = 0, right = len - 1;
  while (nums[left] === copy[left] && left < len) left++;
  while (left < right && nums[right] === copy[right]) right--;
  return right === left ? 0 : right - left + 1;
}

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
`

module.exports = {
  code581
}