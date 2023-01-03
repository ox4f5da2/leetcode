const code69 = `
/**
 * @param {number} x
 * @return {number}
 */

function mySqrt(x) {
  const EPSILON = 1e-6
  let temp1 = Math.E ** (Math.log(x) / 2), temp2 = Math.ceil(temp1);
  return temp2 - temp1 < EPSILON ? temp2 : Math.floor(temp1);
};

function mySqrt(x) {
  let left = 0, right = x === 1 ? 1 : Math.floor(x / 2), mid;
  while (left < right) {
    mid = Math.ceil((left + right) / 2);
    if (mid * mid <= x) left = mid;
    else right = mid - 1;  
  }
  return left;
};

console.log(mySqrt(16));
`

module.exports = {
  code69
}