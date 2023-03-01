const code2180 = `
/**
 * @param {number} num
 * @return {number}
 */

function calcSum(num) {
  let result = 0;
  while (num) {
    result += num % 10;
    num = Math.floor(num / 10);
  }
  return result;
}

function countEven(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    calcSum(i) % 2 === 0 && result++;
  }
  return result;
};

console.log(countEven(30));
`

module.exports = {
  code2180
}