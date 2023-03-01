const codeOffer67 = `
/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
  const MIN = -(2 ** 31), MAX = 2 ** 31 - 1;
  let result = Number.parseInt(str.trim());
  if (Number.isNaN(result)) result = 0;
  if (result < MIN) result = MIN;
  else if (result > MAX) result = MAX;
  return result;
};
`
module.exports = {
  codeOffer67
}