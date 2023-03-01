const code1413 = `
/**
 * @param {number[]} nums
 * @return {number}
 */

function minStartValue(nums) {
  let result = Number.MAX_SAFE_INTEGER, sum = 0;
  nums.forEach(item => {
    sum += item;
    result = sum < result ? sum : result;
  })
  return result > 0 ? 1 : 1 - result;
};

console.log(minStartValue([0, 2, 3, 4]));
`

module.exports = {
  code1413
}