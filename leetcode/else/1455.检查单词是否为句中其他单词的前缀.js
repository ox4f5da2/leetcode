const code1455 = `
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */

function isPrefixOfWord(sentence, searchWord) {
  const list = sentence.split(" ");
  let result = -1;
  for (let i = 0, len = list.length; i < len; i++) {
    if (list[i].startsWith(searchWord)) {
      result = i;
      break;
    }
  }
  return result < 0 ? result : result + 1;
};

console.log(isPrefixOfWord("hellohello hellohellohello", "ell"));
`

module.exports = {
  code1455
}