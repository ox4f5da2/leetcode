const codeOffer46 = `
/**
 * @param {number} num
 * @return {number}
 */

function splitNum(num) {
  if (num === 0) return [0];
  let list = [];
  while (num) {
    list.push(num % 10);
    num = Math.floor(num / 10);
  }
  return list.reverse();
}

function translateNum(num) {
  let list = splitNum(num);
  let len = list.length;
  if (len <= 1) return len;
  let dp = [1];
  for (let i = 1; i < len; i++) {
    let temp = list[i] + list[i - 1] * 10;
    dp[i] = dp[i - 1] + (temp >= 10 && temp <= 25 ? (dp[i - 2] ?? 1) : 0);
  }
  return dp[len - 1];
};

console.log(translateNum(0));
`

module.exports = {
  codeOffer46
}