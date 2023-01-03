const code151 = `
/**
 * @param {string} s
 * @return {string}
 */

 function reverseWords(s) {
  s = s.trim().split(" ");
  return s.filter(item => item !== "").reverse().join(" ");
};

console.log(reverseWords("a good   example"));
`

module.exports = {
  code151
}