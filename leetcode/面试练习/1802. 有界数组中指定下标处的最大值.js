const code1802 = `
/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */

function calcSum(space, num) {
  if (num === 0) return 0;
  return space >= num ? (num + 1) * num / 2 + space - num : (num * 2 - space + 1) * space / 2 ;
}

function maxValue(n, index, maxSum) {
  let left = 1, right = maxSum, mid;
  while (left < right) {
    mid = Math.ceil((left + right) / 2);
    if (calcSum(index, mid - 1) + calcSum(n - index, mid) <= maxSum) left = mid;
    else right = mid - 1;
  }
  return left;
};

console.log(maxValue(1, 0, 780055968));
`

module.exports = {
  code1802
}