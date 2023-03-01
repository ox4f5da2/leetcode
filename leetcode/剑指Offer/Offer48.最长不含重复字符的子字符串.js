const codeOffer48 = `
/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
  let result = 0, str = "";
  for (let i = 0, len = s.length; i < len; i++) {
    str += s[i];
    let j = i + 1;
    while (!str.includes(s[j]) && j < len) {
      str += s[j];
      j++;
    }
    i = j - 1;
    result = Math.max(result, str.length);
    str = "";
  }
  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
`

module.exports = {
  codeOffer48
}