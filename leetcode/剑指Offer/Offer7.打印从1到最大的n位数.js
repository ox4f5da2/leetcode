const codeOffer7 = `
/**
 * @param {number} n
 * @return {number[]}
 */

function printNumbers(n) {
  let result = [];
  for (let i = 1, len = 10 ** n; i < len; i++) result.push(i);
  return result;
};

console.log(printNumbers(3));
`

module.exports = {
  codeOffer7
}