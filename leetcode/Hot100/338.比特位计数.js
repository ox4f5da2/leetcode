const code338 = `
/**
 * @param {number} n
 * @return {number[]}
 */

function judge(n) {
  // 判断是否为2的幂次方
  return (n & (n - 1)) === 0;
}

function countBits(n) {
  let list = [0], idx = 0;
  if (n === 0) return list;
  for (let i = 1; i <= n; i++) {
    let flag = judge(i);
    if (flag) {
      idx = i;
      list[i] = 1;
      continue;
    }
    else {
      list[i] = list[i - idx] + list[idx];
    }
  }
  return list;
};

// console.log(countBits(10));
`

module.exports = {
  code338
}