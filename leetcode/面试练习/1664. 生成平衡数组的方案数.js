const code1664 = `
/**
 * @param {number[]} nums
 * @return {number}
 */

function waysToMakeFair(nums) {
  let result = 0, prefixSum = [], len = nums.length, last = len - 1;
  for (let i = 0; i < len; i++) {
    prefixSum[i] = (prefixSum[i - 2] ?? 0) + nums[i];
  }
  const lastEven = len % 2 === 0 ? get(last - 1) : get(last);
  const lastOdd = len % 2 === 1 ? get(last - 1) : get(last);
  for (let i = 0; i < len; i++) {
    let oddSum = 0, evenSum = 0;
    if (i % 2 === 0) {
      oddSum = get(i - 1) + lastEven - get(i);
      evenSum = get(i - 2) + lastOdd - get(i - 1);
    } else {
      oddSum = get(i - 2) + lastEven - get(i - 1);
      evenSum = get(i - 1) + lastOdd - get(i);
    }
    oddSum === evenSum && result++;
  }
  return result;

  function get(i) {
    return prefixSum[i] ?? 0;
  }
};

console.log(waysToMakeFair([1]));
`

module.exports = {
  code1664
}