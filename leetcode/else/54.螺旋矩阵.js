const code54 = `
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

function spiralOrder(matrix) {
  const row = matrix.length, column = matrix[0].length, all = row * column;
  const temp = { // 上 下 左 右
    'up': 0,
    'down': row,
    'left': -1,
    'right': column
  }
  const result = [];
  let direction = 'right', i = 0, j = 0;
  while (result.length < all) {
    result.push(matrix[i][j]);
    const max = temp[direction];
    switch (direction) {
      case 'right':
        if (j + 1 < max) j++;
        else {
          direction = 'down';
          temp['right']--;
          i++;
        }
        break;
      case 'down':
        if (i + 1 < max) i++;
        else {
          direction = 'left';
          temp['down']--;
          j--;
        }
        break;
      case 'left':
        if (j - 1 > max) j--;
        else {
          direction = 'up';
          temp['left']++;
          i--;
        }
        break;
      case 'up':
        if (i - 1 > max) i--;
        else {
          direction = 'right';
          temp['up']++;
          j++;
        }
        break;
    }
  }
  return result;
};

console.log(spiralOrder([[1, 2]]));
`
module.exports = {
  code54
}