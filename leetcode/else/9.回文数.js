const code9 = `
/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  return (x + "").split("").reverse().join("") === (x + "");
};
console.log(isPalindrome(-123));
`

module.exports = {
  code9
}