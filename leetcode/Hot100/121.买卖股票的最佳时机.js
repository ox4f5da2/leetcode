const code121 = `
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let dp = [], min = 1e4 + 1;
  prices.forEach((price, index) => {
    min = Math.min(min, price);
    dp[index] = Math.max(dp[index - 1] === undefined ? 0 : dp[index - 1], price - min);
  });
  return dp[prices.length - 1];
};

function maxProfit(prices) {
  let result = 0, minPrice = Number.MAX_SAFE_INTEGER;
  prices.forEach((item, index) => {
      minPrice = Math.min(minPrice, item);
      result = Math.max(item - minPrice, result);
  })
  return result
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
`

module.exports = {
  code121
}