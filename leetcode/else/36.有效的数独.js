const code36 = `
/**
 * @param {character[][]} board
 * @return {boolean}
 */
function addNumber(map, key, item) {
  let temp = null;
  temp = map.get(key);
  if (temp) {
    if (temp.includes(item)) return false;
    temp.push(item);
  } else {
    map.set(key, [item]);
  }
  return true;
}

function isValidSudoku(board) {
  const rowMap = new Map(), columnMap = new Map(), cellMap = new Map();
  for (let i = 0, row = board.length; i < row; i++) {
    for (let j = 0, column = board[0].length; j < column; j++) {
      const item = board[i][j];
      if (item === ".") continue;
      if (!(addNumber(rowMap, i, item) && addNumber(columnMap, j, item) && addNumber(cellMap, 3 * Math.floor(i / 3) + Math.ceil((j + 1) / 3), item))) {
        console.log(i, j);
        return false;
      }
    }
  }
  return true;
};

console.log(isValidSudoku([
  [".", ".", "5", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", ".", "1", "4", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "9", "2", ".", "."],
  ["5", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "3", "."],
  [".", ".", ".", "5", "4", ".", ".", ".", "."],
  ["3", ".", ".", ".", ".", ".", "4", "2", "."],
  [".", ".", ".", "2", "7", ".", "6", ".", "."]]
));
`

module.exports = {
  code36
}