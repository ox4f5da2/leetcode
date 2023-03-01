const code704 = `
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  let left = 0, right = nums.length - 1, mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) right = mid;
    else left = mid + 1;
  }
  return nums[left] === target ? left : -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 2));
`

module.exports = {
  code704
}