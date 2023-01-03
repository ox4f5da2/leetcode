const code1422 = `
/**
 * @param {string} s
 * @return {number}
 */

function maxScore(s) {
  let left = 0, right = 0, result = 0;
  for (let char of s) {
    if (char === "1") right++;
  }
  for (let i = 0, len = s.length; i < len - 1; i++) {
    let char = s[i];
    if (char === "0") left++;
    if (char === "1") right--;
    let temp = left + right;
    result = temp > result ? temp : result;
  }
  return result;
};

console.log(maxScore("00"));
`

module.exports = {
  code1422
}