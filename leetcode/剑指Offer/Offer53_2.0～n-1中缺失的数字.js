const codeOffer53_2 = `
/**
 * @param {number[]} nums
 * @return {number}
 */

function missingNumber(nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    if(nums[i] !== i) return i
  }
};
`

module.exports = {
  codeOffer53_2
}