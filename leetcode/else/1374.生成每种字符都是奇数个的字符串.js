const code1374 = `
/**
 * @param {number} n
 * @return {string}
 */

function generateTheString(n) {
  if (n % 2 == 0) return 'a'.repeat(n - 1) + 'b';
  return 'a'.repeat(n);
};

function generateTheString(n) {
  return 'a'.repeat(n - 1) + (n % 2 ? 'a' : 'b');
};

console.log(generateTheString(4));
`

module.exports = {
  code1374
}