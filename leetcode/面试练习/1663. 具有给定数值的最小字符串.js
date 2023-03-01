const code1663 = `
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

function getSmallestString(n, k) {
  let result = '', rest = n;
  for (let i = 1; i <= n; i++) {
    if (k - 1 > (n - i) * 26) break;
    result += 'a';
    k--;
    rest--;
  }
  let num = Math.floor(k / 26);
  let code = 97 + k - num * 26 - 1;
  return result + (code < 97 ? '' : String.fromCharCode(97 + k - num * 26 - 1)) + 'z'.repeat(num);
};

console.log(getSmallestString(5, 130));
`

module.exports = {
  code1663
}