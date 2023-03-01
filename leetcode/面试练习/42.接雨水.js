const code42 = `
/**
 * @param {number[]} height
 * @return {number}
 */

function trap(height) {
  const array1 = [], array2 = [], len = height.length - 1;
  let temp1 = -Infinity, temp2 = -Infinity, result = 0;
  for (let i = 0; i <= len; i++) {
    temp1 = Math.max(temp1, height[i]);
    array1[i] = temp1;
    temp2 = Math.max(temp2, height[len - i]);
    array2[len - i] = temp2;
  }
  for (let i = 0; i <= len; i++) {
    result += Math.min(array1[i], array2[i]) - height[i];
  }
  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
`

module.exports = {
  code42
}