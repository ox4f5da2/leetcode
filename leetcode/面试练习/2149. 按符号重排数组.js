const code2149 = `
/**
 * @param {number[]} nums
 * @return {number[]}
*/

function rearrangeArray(nums) {
  const result = [], negative = [], positive = [], len = nums.length / 2;
  for (let i = 0, len = nums.length; i < len; i++) {
    const item = nums[i];
    if (item > 0) positive.push(item);
    else negative.push(item);
  }
  let p = 0;
  while (p < len) {
    result.push(positive[p], negative[p]);
    p++;
  }
  return result;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
`

module.exports = {
  code2149
}