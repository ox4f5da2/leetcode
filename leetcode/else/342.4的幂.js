const code342 = `
/**
 * @param {number} n
 * @return {boolean}
 */

function isPowerOfFour(n) {
  n = +n;
  return (n & (n - 1)) === 0 && n % 3 === 1;
};

console.log(isPowerOfFour(15));
`

module.exports = {
  code342
}