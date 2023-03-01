const codeOffer15 = `
/**
 * @param {number} n - a positive integer
 * @return {number}
 */

function hammingWeight(n) {
  let result = 0;
  while (n) {
    n = n & (n - 1);
    result++;
  }
  return result;
};

console.log(hammingWeight(4294967293));
`

module.exports = {
  codeOffer15
}