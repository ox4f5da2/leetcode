const codeOffer44 = `
/**
 * @param {number} n
 * @return {number}
 */

let table = [9, 180, 27e2, 36e3, 45e4, 54e5, 63e6, 72e7, 81e9];

function findNthDigit(n) {
  let cnt = 1;
  for (let item of table) {
    let temp = n - item;
    if (temp < 0) break;
    cnt++;
    n = temp;
  }
  let nth = 10 ** (cnt - 1) + Math.ceil(n / cnt) - 1;
  let rest = n % cnt;
  return Math.floor(nth / (10 ** (!rest ? rest : cnt - rest))) % 10;
};

console.log(findNthDigit(205));
`

module.exports = {
  codeOffer44
}