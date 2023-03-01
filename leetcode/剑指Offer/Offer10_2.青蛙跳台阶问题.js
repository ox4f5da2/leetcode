const codeOffer10_2 = `
/**
 * @param {number} n
 * @return {number}
 */

function format(n) {
  return n % (1e9 + 7);
}

function numWays(n) {
  let result = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    result[i] = format(result[i - 1] + result[i - 2]);
  }
  return result[n];
};

console.log(numWays(44));
`

module.exports = {
  codeOffer10_2
}