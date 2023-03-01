const code2293 = `
/**
 * @param {number[]} nums
 * @return {number}
 */

function minMaxGame(nums) {
  return nums.length === 1 ? nums[0] : recursion(nums, 'min');

  function recursion(nums, tag) {
    const len = nums.length;
    if (len === 2) {
      return Math[tag](...nums);
    }

    return Math[tag](
      recursion(nums.slice(0, len / 2), 'min'),
      recursion(nums.slice(len / 2), 'max')
    )
  }
};

console.log(minMaxGame([70, 38, 21, 22]));
`

module.exports = {
  code2293
}