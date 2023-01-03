const codeOffer66 = `
/**
 * @param {number[]} a
 * @return {number[]}
 */

function constructArr(a) {
  let list1 = [], list2 = [], result = [], len = a.length;
  for (let i = 0; i < len; i++) list1[i] = a[i] * (list1[i - 1] ?? 1);
  for (let i = len - 1; i >= 0; i--) list2[i] = a[i] * (list2[i + 1] ?? 1);
  for (let i = 0; i < len; i++) result[i] = (list1[i - 1] ?? 1) * (list2[i + 1] ?? 1);
  return result;
};

console.log(constructArr([1, 2, 3, 4, 5]));
`

module.exports = {
  codeOffer66
}