const codeOffer57 = `
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  let map = new Map();
  for (let item of nums) map.set(item, true);
  for (let item of nums) {
    if (map.get(target - item)) return [item, target - item];
  }
};

console.log(twoSum([10, 26, 30, 31, 47, 60], 40));
`

module.exports = {
  codeOffer57
}