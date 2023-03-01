const code326 = `
/**
 * @param {number} n
 * @return {boolean}
 */

function isPowerOfThree(n) {
  if (n === 0) return false;
  while (n !== 1) {
    n /= 3;
    if (!Number.isInteger(n)) return false;
  }
  return true;
};

console.log(isPowerOfThree(1));
`

module.exports = {
  code326
}