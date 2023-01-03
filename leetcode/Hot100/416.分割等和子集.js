const code416 = `
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 回溯，好像超时了
function calcSetSum(subSet) {
  return subSet.reduce((pre, curr) => pre += curr, 0);
}

function calcSetComplement(subSet, target) {
  const copyTarget = [...target];
  for (let i = 0, len = subSet.length; i < len; i++) {
    const idx = copyTarget.indexOf(subSet[i]);
    if (idx >= 0) copyTarget.splice(idx, 1);
  }
  return copyTarget;
}

function canPartition(nums) {
  let result = [], path = [], len = nums.length, flag = false;
  backTracking(0);
  return flag;
  function backTracking(start) {
    result.push(Array.from(path));
    const res1 = calcSetSum(path);
    const res2 = calcSetSum(calcSetComplement(path, nums));
    if (res1 === res2) flag = true;
    if (path.length === len || flag) {
      return;
    }
    for (let i = start; i < len; i++) {
      path.push(nums[i]);
      backTracking(i + 1);
      path.pop();
    }
  }
};

console.log(canPartition([100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,97]));
`

module.exports = {
  code416
}