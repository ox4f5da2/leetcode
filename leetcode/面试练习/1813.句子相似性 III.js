const code1813 = `
/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */

function areSentencesSimilar(sentence1, sentence2) {
  const list1 = sentence1.split(" ");
  const list2 = sentence2.split(" ");
  let i = 0, j = 0, minLen = Math.min(list1.length, list2.length);
  while (i < minLen && list1[i] === list2[i]) i++;
  while (j < minLen && minLen - j - 1 >= i && list1[list1.length - j - 1] === list2[list2.length - j - 1]) j++;
  return i + j === minLen;
};

console.log(areSentencesSimilar("My name is Haley", "My Haley"));
`

module.exports = {
  code1813
}