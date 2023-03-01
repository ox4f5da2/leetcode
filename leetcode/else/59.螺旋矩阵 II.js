const code59 = `
/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
  if (n === 1) return [[1]];
  const arr = [], all = n * n;
  let cnt = 1, currentSide = 0, currentSideNum = n - 1;
  for (let i = 0; i < n; i++) arr.push(new Array(n));
  while (cnt <= all) {
    for (let j = 0; j < currentSideNum; j++) {
      const temp1 = currentSide % 4,
        temp2 = Math.floor(currentSide / 4),
        temp3 = n - Math.ceil(currentSide / 4);
      switch (temp1) {
        case 0: arr[temp2][j + temp2] = cnt++; break;
        case 1: arr[j + temp2][temp3] = cnt++; break;
        case 2: arr[temp3][temp3 - j] = cnt++; break;
        case 3: arr[temp3 - j][temp2] = cnt++; break;
        default: break;
      }
    }
    !(++currentSide % 4) && (currentSideNum = currentSideNum - 2 > 0 ? currentSideNum - 2 : 1);
  }
  return arr;
};

function logArray(arr) {
  let str = "";
  arr.forEach(row => str += row.join(" ") + "\n");
  console.log(str);
}

logArray(generateMatrix(7));
`

module.exports = {
  code59
}