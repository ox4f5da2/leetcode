const code2042 = `
/**
 * @param {string} s
 * @return {boolean}
 */
function areNumbersAscending(s) {
  return s.match(/\d+/g).every((item, index, array) => +item < +(array[index + 1] ?? Infinity));
};

console.log(areNumbersAscending("1 box has 1 blue 4 red 6 green and 12 yellow marbles"));
`

module.exports = {
  code2042
}