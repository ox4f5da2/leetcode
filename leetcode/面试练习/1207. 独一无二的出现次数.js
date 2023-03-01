const code1207 = `
/**
 * @param {number[]} arr
 * @return {boolean}
 */

function uniqueOccurrences(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const res = map.get(item);
    map.set(item, (res ?? 0) + 1);
  }
  const nums = [...map.values()];
  return new Set(nums).size === nums.length;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
`

module.exports = {
  code1207
}