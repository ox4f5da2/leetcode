const code448 = `
/**
 * @param {number[]} nums
 * @return {number[]}
 */

function findDisappearedNumbers(nums) {
  const temp = [...new Array(nums.length + 1).keys()].slice(1);
  return temp.filter(item => !nums.includes(item));
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
`

module.exports = {
  code448
}