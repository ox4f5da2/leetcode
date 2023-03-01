const code1657 = `
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

function calcLetters(str) {
  const map = new Map(), len = str.length;
  for (let i = 0; i < len; i++) {
    const res = map.get(str[i]);
    map.set(str[i], (res ?? 0) + 1);
  }
  const map1 = new Map();
  for (const [char, num] of map.entries()) {
    const res = map1.get(num);
    res === undefined ? map1.set(num, [char]) : res.push(char);
  }
  return [map, map1];
}

function closeStrings(word1, word2) {
  if (word1.length !== word2.length) return false;
  const [map1, map2] = calcLetters(word1), [map3, map4] = calcLetters(word2);
  for (const [char, num] of map1.entries()) {
    if (map3.get(char) === undefined) return false;
  }
  for (const [num, letters] of map2.entries()) {
    if (map4.get(num)?.length !== letters.length) return false;
  }
  return true;
};

console.log(closeStrings("aabbcccddd", "abccccdddd"));
`

module.exports = {
  code1657
}