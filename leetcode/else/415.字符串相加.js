const code415 = `
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carry = 0, str = "", temp;
  let p1 = num1.length - 1, p2 = num2.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    temp = +(num1[p1] ?? 0) + +(num2[p2] ?? 0) + carry;
    str = (temp % 10) + str;
    carry = Math.floor(temp / 10);
    p1--;
    p2--;
  }
  return (carry ? carry : "") + str;
};

console.log(addStrings("999", "9999"));
console.log(addStrings("9999", "999"));
console.log(addStrings("0", "0"));
console.log(addStrings("456", "77"));
console.log(addStrings("11", "123"));
`

module.exports = {
  code415
}