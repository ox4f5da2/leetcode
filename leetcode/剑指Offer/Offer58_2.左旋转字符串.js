const codeOffer58_2 = `
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */

function reverseLeftWords(s, n) {
  return s.slice(n) + s.slice(0, n);
};
`

module.exports = {
  codeOffer58_2
}