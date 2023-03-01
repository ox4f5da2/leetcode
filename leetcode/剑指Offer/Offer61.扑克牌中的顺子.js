const codeOffer61 = `
/**
 * @param {number[]} nums
 * @return {boolean}
 */

function isStraight(nums) {
  let joker = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === 0) joker++;
    else if (nums[i] === nums[i + 1]) return false;
  }
  return nums.at(-1) - nums[joker] < 5;
};
`

module.exports = {
  codeOffer61
}