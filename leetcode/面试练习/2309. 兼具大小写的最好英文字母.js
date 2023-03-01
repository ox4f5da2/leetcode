const code2309 = `
/**
 * @param {string} s
 * @return {string}
 */

function greatestLetter(s) {
  let result = '';
  const map = new Map();
  for (let i = 0, len = s.length; i < len; i++) {
    const code = s[i].charCodeAt();
    map.set(s[i], true);
    if (code >= 65 && code <= 90) {
      const temp = map.get(String.fromCharCode(code + 32));
      if (temp && (result.charCodeAt() < code || result === '')) {
        result = s[i];
      }
    }
    if (code >= 97 && code <= 122) {
      const temp = map.get(String.fromCharCode(code - 32));
      if (temp && (result.charCodeAt() < code - 32 || result === '')) {
        result = s[i].toUpperCase();
      }
    }
  }
  return result;
};

console.log(greatestLetter("AbCdEfGhIjK"));
`

module.exports = {
  code2309
}