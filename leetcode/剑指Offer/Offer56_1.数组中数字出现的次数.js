const codeOffer56_1 = `
/**
 * @param {number[]} nums
 * @return {number[]}
 */

function singleNumbers(nums) {
  let map = new Map(), result = [];
  nums.forEach(item => {
    let temp = map.get(item);
    temp === undefined ? map.set(item, 1) : map.set(item, temp + 1);
  })
  for (let item of map.entries()) {
    item[1] === 1 && result.push(item[0]);
  }
  return result;
};

console.log(singleNumbers([1, 2, 10, 4, 1, 4, 3, 3]));
`

module.exports = {
  codeOffer56_1
}