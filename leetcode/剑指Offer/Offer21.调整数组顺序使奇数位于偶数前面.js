const codeOffer21 = `
/**
 * @param {number[]} nums
 * @return {number[]}
 */

function exchange(nums) {
  let len = nums.length, left = 0, right = len;
  while (left < right) {
    while (left < len && nums[left] % 2) {
      left++;
    }
    while (right >= 0 && !(nums[right] % 2)) {
      right--;
    }
    if (left < right && left < len && right >= 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    left++;
    right--;
  }
  return nums;
};

console.log(exchange([1, 11, 14]));
`

module.exports = {
  codeOffer21
}