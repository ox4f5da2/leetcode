const code2315 = `
/**
 * @param {string} s
 * @return {number}
 */

function countAsterisks(s) {
  let result = 0, flag = true;
  for (const char of s) {
    if (flag && char === '*') result++;
    else if (char === '|') flag = !flag;
  }
  return result;
};

console.log(countAsterisks("**l|*e*et|c**o|*de|"));
`

module.exports = {
  code2315
}