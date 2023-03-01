const code494 = `
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/

function sum(symbol, nums) {
  let sum = 0;
  nums.forEach((item, index) => sum += item * symbol[index]);
  return sum;
}

function findTargetSumWays(nums, target) {
  let result = 0, len = nums.length, path = [], symbol = [1, -1];
  backTracking();
  return result;
  function backTracking() {
    if (path.length === len) {
      sum(path, nums) === target && result++;
      return;
    }
    for (let i = 0; i < 2; i++) {
      path.push(symbol[i]);
      backTracking();
      path.pop();
    }
  }
};

// 为啥下面这个比上面的慢呢？
// function findTargetSumWays(nums, target) {
//   let result = 0, len = nums.length, path = 0, symbol = [1, -1];
//   backTracking(0);
//   return result;
//   function backTracking(index) {
//     if (index === len) {
//       path === target && result++;
//       return;
//     }
//     for (let i = 0; i < 2; i++) {
//       console.log(path);
//       path += nums[index] * symbol[i];
//       backTracking(index + 1);
//       path -= nums[index] * symbol[i];
//     }
//   }
// };

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
`

module.exports = {
  code494
}