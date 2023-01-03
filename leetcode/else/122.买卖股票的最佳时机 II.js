const code122 = `
/**
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
  let minPrice = prices[0], beforeMaxProfit = 0, result = 0;
  for (let i = 1, len = prices.length; i < len; i++) {
    if (prices[i] < prices[i - 1]) {
      minPrice = prices[i];
      beforeMaxProfit = result;
    }
    else {
      result = Math.max(prices[i] - minPrice + beforeMaxProfit, result);
    }
  }
  return result;
};

console.log(maxProfit([1, 2]));
`

module.exports = {
  code122
}