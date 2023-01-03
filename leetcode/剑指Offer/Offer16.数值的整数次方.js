const codeOffer16 = `
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

function calc(x, n) {
  let result = 1;
  while (n) {
    if (n & 1) result *= x;
    x *= x;
    n = Math.abs(n >> 1);
  }
  return result;
}

function myPow(x, n) {
  if (x === 0) return 0;
  else if (x === 1) return 1;
  else if (x === -1) return ((n & 1) === 1 ? -1 : 1);
  if (n === 0) return 1;
  return n < 0 ? 1 / calc(x, -n) : calc(x, n);
};

console.log(myPow(2, -2147483648));
`

module.exports = {
  codeOffer16
}