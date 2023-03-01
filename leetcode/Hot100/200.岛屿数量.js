const code200 = `
/**
 * @param {character[][]} grid
 * @return {number}
 */

方法1:
function generateArray(row, column, fillElement) {
  let arr = [];
  for (let i = 0; i < row; i++) {
    arr.push(new Array(column).fill(fillElement));
  }
  return arr;
}

function numIslands(grid) {
  let row = grid.length, column = grid[0].length, islandNum = 0;
  let visitedMap = generateArray(row + 2, column + 2, 0);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      backTracking(i, j);
    }
  }
  return islandNum;
  function backTracking(i, j) {
    if (grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === "0") return;
    if (visitedMap[i + 1][j + 1]) return;
    if (visitedMap[i][j + 1] === 0 && visitedMap[i + 2][j + 1] === 0
      && visitedMap[i + 1][j] === 0 && visitedMap[i + 1][j + 2] === 0) {
      visitedMap[i + 1][j + 1] = ++islandNum;
    }
    else {
      visitedMap[i + 1][j + 1] = visitedMap[i][j + 1] || visitedMap[i + 2][j + 1]
        || visitedMap[i + 1][j] || visitedMap[i + 1][j + 2];
    }
    // console.log(i, j);
    // console.log(visitedMap);
    backTracking(i - 1, j) || backTracking(i, j - 1)
      || backTracking(i + 1, j) || backTracking(i, j + 1);
  }
};

方法2: 
var genMap = function (row, column) {
  let map = [];
  for (let i = 0; i < row; i++) {
    map.push(new Array(column).fill(false));
  }
  return map;
}

var ifExit = function (array, i, j) {
  return (array[i] ?? false) && (array[i][j] ?? false) && true;
}

var numIslands = function (grid) {
  const row = grid.length, column = grid[0].length;
  const map = genMap(row, column);
  let cnt = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (map[i][j]) continue;
      search(i, j);
      grid[i][j] === "1" && cnt++;
    }
  }
  return cnt;
  function search(i, j) {
    if (!ifExit(grid, i, j) || map[i][j] || grid[i][j] === "0") return false;
    map[i][j] = true;
    return search(i - 1, j) || search(i + 1, j) || search(i, j - 1) || search(i, j + 1);
  }
};

console.log(numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]));
`

module.exports = {
  code200
}