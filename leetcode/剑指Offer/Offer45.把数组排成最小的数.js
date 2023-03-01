const codeOffer45 = `
/**
 * @param {number[]} nums
 * @return {string}
 */
function minNumber(nums) {
  return nums.map(item => "" + item).sort((a, b) => {
    if (a + b < b + a) return -1;
    else if (a + b > b + a) return 1;
    else return 0
  }).join("");
};

console.log(minNumber([3, 30, 34, 5, 9]));
`

module.exports = {
  codeOffer45
}