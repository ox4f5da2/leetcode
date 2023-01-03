const code279 = `
/**
 * @param {number} n
 * @return {number}
 */

function calcNumSquares(n) {
  let list = [], num = 1, temp = num ** 2;
  while (temp <= n) {
    list.push(temp);
    temp = (++num) ** 2;
  }
  return list;
}

function numSquares(n) {
  let map = [0, 1];
  let sequence = calcNumSquares(n);
  console.log(sequence);
  for (let i = 1; i <= n; i++) {
    if (sequence.includes(i)) {
      map[i] = 1;
    }
    else {
      let min = Number.MAX_SAFE_INTEGER;
      for (let j = 0, len = sequence.length; j < len; j++) {
        const temp = map[sequence[j]] + map[i - sequence[j]];
        min = temp < min ? temp : min;
      }
      map[i] = min;
    }
  }
  console.log(map);
  return map[n];
};
console.log(numSquares(13));
`

module.exports = {
  code279
}