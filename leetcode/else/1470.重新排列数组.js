const code1470 = `
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

function shuffle(nums, n) {
  let p1 = 0, p2 = n, result = [];
  while (p2 < 2 * n) result.push(nums[p1++], nums[p2++]);
  return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
`

module.exports = {
  code1470
}