const code646 = `
/**
 * @param {number[][]} pairs
 * @return {number}
 */

function findLongestChain(pairs) {
  let curr = Number.MIN_SAFE_INTEGER, result = 0;
  pairs = pairs.sort((a, b) => a[1] - b[1]);
  for (let item of pairs) {
    if (curr < item[0]) {
      curr = item[1];
      result++;
    }
  }
  return result
};

console.log(findLongestChain([[1, 10], [3, 4], [2, 3]]));
`

module.exports = {
  code646
}