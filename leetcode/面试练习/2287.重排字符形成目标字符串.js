const code2287 = `
/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */

function countChar(str) {
  const map = {};
  for (const char of str) {
    map[char] = map[char] === undefined ? 1 : map[char] + 1;
  }
  return map;
}

function rearrangeCharacters(s, target) {
  const map1 = countChar(s), map2 = countChar(target);
  let result = Infinity;
  Object.keys(map2).forEach(char => {
    map2[char] = Math.floor((map1[char] ?? 0) / map2[char]);
    result = Math.min(result, map2[char]);
  })
  return result;
};

console.log(rearrangeCharacters("a", "hhexd"));
`

module.exports = {
  code2287
}