const codeOffer58_1 = `
/**
 * @param {string} s
 * @return {string}
 */

function reverseWords(s) {
  return s.split(" ").filter(item => item !== "").reverse().join(" ");
};

console.log(reverseWords("a good   example"));
`

module.exports = {
  codeOffer58_1
}