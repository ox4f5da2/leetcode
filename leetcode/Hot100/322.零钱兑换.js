const code322 = `
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  let list = [0];
  for (let i = 1; i <= amount; i++) {
    if (coins.includes(i)) {
      list[i] = 1;
      continue;
    }
    let min = Number.POSITIVE_INFINITY;
    for (let j = 1; j < i; j++) {
      const temp = list[j] + list[i - j];
      min = temp < min ? temp : min;
    }
    list[i] = min;
  }
  return Number.isFinite(list[amount]) ? list[amount] : -1;
};

console.log(coinChange([1, 2, 5], 11));
`

module.exports = {
  code322
}