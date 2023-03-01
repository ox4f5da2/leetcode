const codeOffer10_1 = `
/**
 * @param {number} n
 * @return {number}
 */

function fib(n) {
  let result = [0, 1];
  if (n <= 1) return result[n];
  for (let i = 2; i <= n; i++) {
    result[i] = BigInt(result[i - 1]) + BigInt(result[i - 2]);
  }
  const temp = result[n];
  return temp < (1e9 + 7) ? temp : temp % BigInt(1e9 + 7);
};

console.log(fib(81));
`

module.exports = {
  codeOffer10_1
}