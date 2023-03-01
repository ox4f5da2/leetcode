const codeOffer62 = `
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
function lastRemaining(n, m) {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = (result + m) % i;
  }
  return result;
};

console.log(lastRemaining(5, 3));
`

module.exports = {
  codeOffer62
}