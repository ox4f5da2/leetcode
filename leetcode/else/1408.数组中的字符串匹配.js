const code1408 = `
/**
 * @param {string[]} words
 * @return {string[]}
 */

function stringMatching(words) {
  const result = new Set();
  for (let i = 0, len = words.length; i < len - 1; i++) {
    const str = words[i];
    for (let j = i + 1; j < len; j++) {
      const temp = words[j];
      temp.includes(str) && result.add(str);
      str.includes(temp) && result.add(temp);
    }
  }
  return [...result];
};

console.log(stringMatching(["mass","as","hero","superhero"]));
`

module.exports = {
  code1408
}