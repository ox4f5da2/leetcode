const codeOffer50 = `
/**
 * @param {string} s
 * @return {character}
 */

function firstUniqChar(s) {
  if (s === "") return ' ';
  let result = " ", map = new Map();
  for (let char of s) {
    let temp = map.get(char);
    temp === undefined ? map.set(char, 1) : map.set(char, temp + 1);
  }
  for (let item of map.entries()) {
    if (item[1] === 1) {
      result = item[0];
      break;
    }
  }
  return result;
};

console.log(firstUniqChar("cc"));
`

module.exports = {
  codeOffer50
}