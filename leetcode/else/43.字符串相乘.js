const code43 = `
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

function subMultiply(num1, num2, k) {
  if (num1 === "0" || num2 === "0") return "0";
  let carry = 0, str = "";
  for (let i = num1.length - 1; i >= 0; i--) {
    let res = num1[i] * num2 + carry;
    str = (res % 10) + str;
    carry = Math.floor(res / 10);
  }
  return (!carry ? "" : carry) + str + "0".repeat(k);
}

function subAdd(num1, num2) {
  let p1 = num1.length - 1, p2 = num2.length - 1, carry = 0, str = "";
  while (p1 >= 0 || p2 >= 0) {
    let res = +(num1[p1--] ?? 0) + +(num2[p2--] ?? 0) + carry;
    str = (res % 10) + str;
    carry = Math.floor(res / 10);
  }
  return (!carry ? "" : carry) + str;
}

function multiply(num1, num2) {
  let str = "0", cnt = 0;
  while (num2) {
    let res = subMultiply(num1, num2[num2.length - 1], cnt++);
    console.log(res, str);
    str = subAdd(res, str);
    num2 = num2.slice(0, -1);
  }
  return str;
};

console.log(multiply("123456789", "987654321"));
`

module.exports = {
  code43
}