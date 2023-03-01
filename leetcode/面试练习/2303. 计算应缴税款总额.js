const code2303 = `
/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */

function calculateTax(brackets, income) {
  let result = 0, preUpper = 0;
  for (let i = 0, len = brackets.length; i < len; i++) {
    const [upper, percent] = brackets[i];
    if (income <= upper) {
      result += (income - preUpper) * percent;
      return result / 100;
    } else {
      result += (upper - preUpper) * percent;
      preUpper = upper;
    }
  }
};

console.log(calculateTax([[3, 50], [7, 10], [12, 25]], 10));
`

module.exports = {
  code2303
}