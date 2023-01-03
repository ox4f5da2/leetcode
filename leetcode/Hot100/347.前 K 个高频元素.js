const code347 = `
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function topKFrequent(nums, k) {
  let map = new Map();
  nums.forEach(item => {
    const temp = map.get(item)?.val;
    if (!temp) map.set(item, { name: item, val: 1 });
    else map.set(item, { name: item, val: temp + 1 });
  });
  const values = [...map.values()];
  values.sort((a, b) => b.val - a.val);
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(values[i].name);
  }
  return result;
};

console.log(topKFrequent([1,1,1,2,2,3], 2));
`

module.exports = {
  code347
}