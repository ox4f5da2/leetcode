const code695 = `
/**
 * @param {number[][]} grid
 * @return {number}
 */

function maxAreaOfIsland(grid) {
  const row = grid.length, column = grid[0].length;
  const map = genMap(row, column);
  let result = 0, currentNum = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 0) continue;
      let res = walk(i, j);
      if (res) {
        result = Math.max(result, currentNum);
        currentNum = 0;
      }
    }
  }
  return result;

  function genMap(row, column) {
    const result = [];
    for (let i = 0; i < row; i++) {
      result.push(new Array(column).fill(false));
    }
    return result;
  }

  function ifExit(i, j) {
    return (grid[i] ?? false) && (grid[i][j] ?? false) && true;
  }

  function walk(i, j) {
    if (!ifExit(i, j) || map[i][j] || !grid[i][j]) return false;
    map[i][j] = true;
    currentNum++;
    walk(i - 1, j);
    walk(i + 1, j);
    walk(i, j - 1);
    walk(i, j + 1);
    return true;
  }
};

console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]));
`

module.exports = {
  code695
}