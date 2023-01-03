const codeOffer64 = `
/**
 * @param {number} n
 * @return {number}
 */

function sumNums(n) {
  if (n === 1) return 1;
  return n + sumNums(n - 1);
};

console.log(sumNums(9));
`

module.exports = {
  codeOffer64
}