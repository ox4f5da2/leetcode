const code1582 = `
/**
 * @param {number[][]} mat
 * @return {number}
 */

function numSpecial(mat) {
  let row = mat.length,
    column = mat[0].length,
    set1 = new Array(row).fill(0),
    set2 = new Array(column).fill(0),
    set3 = new Set(),
    result = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (mat[i][j] === 1) {
        !set1[i] ? (set1[i] = 1) : set1[i]++;
        !set2[j] ? (set2[j] = 1) : set2[j]++;
        set3.add([i, j]);
      }
    }
  }
  for (let item of [...set3]) {
    if (set1[item[0]] === 1 && set2[item[1]] === 1) result++;
  }
  return result;
};

console.log(numSpecial([[0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0]]));
`

module.exports = {
  code1582
}