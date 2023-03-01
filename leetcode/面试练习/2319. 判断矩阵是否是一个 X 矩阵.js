const code2319 = `
/**
 * @param {number[][]} grid
 * @return {boolean}
 */

function checkXMatrix(grid) {
  for (let i = 0, row = grid.length; i < row; i++) {
    for (let j = 0, column = grid[0].length; j < column; j++) {
      const item = grid[i][j];
      if (i === j || i + j === column - 1) {
        if (item === 0) return false;
      } else {
        if (item !== 0) return false;
      }
    }
  }
  return true;
};

console.log(checkXMatrix([[2, 0, 0, 1], [0, 3, 1, 0], [0, 5, 2, 0], [4, 0, 0, 2]]));
`

module.exports = {
  code2319
}