const code179 = `
/**
 * @param {number[]} nums
 * @return {string}
 */

function compare(a, b) {
  // 大于0，b会放到a前面；小于0，b会放到a后面
  a = String(a);
  b = String(b);
  let a1 = a + b, b1 = b + a;
  for (let i = 0, len = a1.length; i < len; i++) {
    let code1 = a1[i], code2 = b1[i];
    if (code1 < code2) return 1;
    else if (code1 > code2) return -1;
  }
  return 0;
}

function largestNumber(nums) {
  return nums.sort(compare).join('').replaceAll(/^0+/g, '0');
};

console.log(largestNumber([3, 9, 30, 34, 5]));
`

module.exports = {
  code179
}