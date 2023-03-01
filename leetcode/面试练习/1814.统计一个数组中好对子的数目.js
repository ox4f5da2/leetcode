const code1814 = `
/**
 * @param {number[]} nums
 * @return {number}
 */

function countNicePairs(nums) {
  const MAX = 1e9 + 7, map = new Map(), len = nums.length;
  for (let i = 0; i < len; i++) {
    const res = calc(nums[i]);
    map.set(res, (map.get(res) ?? 0) + 1);
  }
  return [...map.values()].reduce((pre, curr) => pre += (curr - 1) * curr / 2, 0) % MAX;
};

function calc(nums) {
  return nums - ('' + nums).split('').reverse().join('');
}

console.log(countNicePairs([42, 11, 1, 97]));
`

module.exports = {
  code1814
}