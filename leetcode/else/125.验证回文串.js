const code125 = `
/**
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome(s) {
  s = s.toLowerCase().match(/[0-9a-zA-Z]+/g)?.join('');
  if (s === undefined) return true;
  let left = 0, right = s.length - 1;
  while (left <= right) {
    if (s[left++] !== s[right--]) return false;
  }
  return true;
};

console.log(isPalindrome("0P"));
`

module.exports = {
  code125
}