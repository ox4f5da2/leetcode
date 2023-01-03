const code461 = `
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function countOne(num) {
  let cnt = 0;
  while (num) {
    num = num & (num - 1);
    cnt++;
  }
  return cnt;
}

function hammingDistance(x, y) {
  return countOne(x ^ y);
};

console.log(hammingDistance(1, 4));
`

module.exports = {
  code461
}