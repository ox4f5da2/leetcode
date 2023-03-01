const code67 = `
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// 直接计算
function calc(a, b, precarry) {
  let res = 0, carry = 0;
  const num1 = Number.parseInt(a), num2 = Number.parseInt(b), num3 = Number.parseInt(precarry);
  res = num1 ^ num2 ^ num3;
  carry = (num1 + num2 + num3) >> 1;
  return { res, carry };
}

function addBinary(a, b) {
  a = a.split(""), b = b.split("");
  let preCarry = 0, len1 = a.length, len2 = b.length;
  if (len1 < len2) a = [...new Array(len2 - len1).fill("0"), ...a];
  else if (len1 > len2) b = [...new Array(len1 - len2).fill("0"), ...b];
  for (let i = a.length - 1; i >= 0; i--) {
    const { res, carry } = calc(a[i], b[i], preCarry);
    preCarry = carry;
    a[i] = res;
  }
  return (preCarry ? "1" : '') + a.join("");
};

// 用内置函数, 会报错
function addBinary(a, b) {
  return (Number.parseInt(a, 2) + Number.parseInt(b, 2)).toString(2);
}

console.log(addBinary("1010", "1011"));
`

module.exports = {
  code67
}