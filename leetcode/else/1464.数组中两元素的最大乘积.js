const code1464 = `
/**
 * @param {number[]} nums
 * @return {number}
 */

function maxProduct(nums) {
  let first = -1, second = -2;
  nums.forEach(item => {
    if (item >= second && item < first) {
      second = item;
    }
    else if (item >= first) {
      second = first;
      first = item;
    }
  })
  return (first - 1) * (second - 1);
};

console.log(maxProduct([3, 4, 5, 2]));
`

module.exports = {
  code1464
}