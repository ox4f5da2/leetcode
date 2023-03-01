const code47 = `
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function permuteUnique(nums) {
  const result = [], path = [], len = nums.length, idx = [], set = new Set();
  recursion();
  return result;
  function recursion() {
    if (path.length === len) {
      const str = path.join();
      if (!set.has(str)) {
        result.push([...path]);
        set.add(str);
      }
      return;
    }

    for (let i = 0; i < len; i++) {
      if (idx.includes(i)) continue;
      idx.push(i);
      path.push(nums[i]);
      recursion();
      path.pop();
      idx.pop();
    }
  }
};

console.log(permuteUnique([1, 1, 2]));
`

module.exports = {
  code47
}