const codeOffer63 = `
/**
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
  let len = prices.length;
  if (len <= 1) return 0;
  let result = 0, min = prices[0];
  for (let i = 1; i < len; i++) {
    min = Math.min(min, prices[i]);
    result = Math.max(result, prices[i] - min);
  }
  return result;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
`

module.exports = {
  codeOffer63
}