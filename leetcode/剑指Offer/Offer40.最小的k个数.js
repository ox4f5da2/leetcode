const codeOffer40 = `
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

function getLeastNumbers(arr, k) {
  return arr.sort((a, b) => a - b).slice(0, k);
};

console.log(getLeastNumbers([3, 2, 1], 2));
`

module.exports = {
  codeOffer40
}