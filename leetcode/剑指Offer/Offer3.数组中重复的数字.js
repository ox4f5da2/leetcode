const codeOffer3 = `
/**
 * @param {number[]} nums
 * @return {number}
 */

function findRepeatNumber(nums) {
  let map = {}, result = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    let temp = nums[i];
    if (!map[temp]) map[temp] = 1;
    else {
      result = temp;
      break;
    }
  }
  return result;
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
`

module.exports = {
  codeOffer3
}