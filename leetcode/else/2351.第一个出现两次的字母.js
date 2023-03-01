const code2351 = `
/**
 * @param {string} s
 * @return {character}
 */
function repeatedCharacter(s) {
  const set = new Set();
  for (const char of s) {
    if (set.has(char)) return char;
    set.add(char);
  }
};

console.log(repeatedCharacter("abccbaacz"));
`

module.exports = {
  code2351
}