const code66 = `
/**
 * @param {number[]} digits
 * @return {number[]}
 */

function plusOne(digits) {
  let carry = 1, idx = digits.length - 1;
  do {
    if (carry + digits[idx] === 10) {
      carry = 1;
      digits[idx] = 0;
    }
    else {
      digits[idx]++;
      carry = 0;
    }
    idx--;
  } while (carry !== 0 && idx >= 0);
  carry === 1 && digits.unshift(1);
  return digits;
};

console.log(plusOne([9, 9, 9]));
`

module.exports = {
  code66
}