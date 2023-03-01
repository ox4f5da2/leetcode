const code560 = `
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function subarraySum(nums, k) {
  const map = new Map().set(0, 1);
  let prefix = 0, result = 0;
  nums.forEach(item => { 
    prefix += item;
    let temp1 = map.get(prefix - k), temp2 = map.get(prefix);
    result += (temp1 ?? 0);
    map.set(prefix, temp2 === undefined ? 1 : temp2 + 1);
  });
  return result;
};

console.log(subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7));
`

module.exports = {
  code560
}