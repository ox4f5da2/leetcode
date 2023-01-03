const codeOffer12 = `
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function initMap(row, column) {
  let array = [];
  for (let i = 0; i < row; i++) array[i] = new Array(column).fill(false);
  return array;
}

function judge(board, i, j) {
  return (board[i] ?? false) && (board[i][j] ?? false) && true;
}

function exist(board, word) {
  const row = board.length, column = board[0].length;
  let map = initMap(row, column);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (board[i][j] !== word[0]) continue;
      let temp = backTracking(i, j, 0);
      if (temp) return true;
    }
  }
  return false;

  function backTracking(i, j, n) {
    if (!judge(board, i, j) || map[i][j] || board[i][j] !== word[n]) return false;
    if (n === word.length - 1) return true;
    map[i][j] = true;
    const res = backTracking(i - 1, j, n + 1) || backTracking(i, j - 1, n + 1) ||
      backTracking(i + 1, j, n + 1) || backTracking(i, j + 1, n + 1);
    map[i][j] = false;
    return res;
  }
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCEDFE"));
`

module.exports = {
  codeOffer12
}