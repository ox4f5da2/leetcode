const codeOffer56_1 = `
/**
 * @param {number[]} nums
 * @return {number}
 */

function singleNumber(nums) {
  let map = new Map(), result = [];
  nums.forEach(item => {
    let temp = map.get(item);
    temp === undefined ? map.set(item, 1) : map.set(item, temp + 1);
  })
  return [...map.entries()].filter(item => item[1] === 1)[0][0];
};
`

module.exports = {
  codeOffer56_1
}