const codeOffer39 = `
/**
 * @param {number[]} nums
 * @return {number}
 */


// 排序
function majorityElement(nums) {
  return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
};

// 哈希表
function majorityElement(nums) {
  let map = new Map();
  nums.forEach(item => {
    let temp = map.get(item);
    !temp ? map.set(item, 1) : map.set(item, temp + 1);
  })
  return [...map.entries()].filter(item => item[1] > Math.floor(nums.length / 2))[0][0];
};

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));
`

module.exports = {
  codeOffer39
}