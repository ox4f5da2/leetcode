const code912 = `
/**
 * @param {number[]} nums
 * @return {number[]}
 */

function sortArray(nums) {
  quickSort(0, nums.length - 1);
  return nums;
  function quickSort(left, right) {
    if (left > right) return;
    let partition = nums[left];
    const [copyLeft, copyRight] = [left, right];
    while (left < right) {
      while (left < right && nums[right] >= partition) right--;
      while (left < right && nums[left] <= partition) left++;
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    [nums[copyLeft], nums[left]] = [nums[left], nums[copyLeft]];
    quickSort(copyLeft, left - 1);
    quickSort(left + 1, copyRight);
  }
};

console.log(sortArray([5, 1, 1, 2, 0, 0]));
`

module.exports = {
  code912
}