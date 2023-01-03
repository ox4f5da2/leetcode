const codeOffer57_2 = `
/**
 * @param {number} target
 * @return {number[][]}
 */

function findContinuousSequence(target) {
  let result = [];
  for (let i = 1, len = Math.floor(target / 2); i <= len; i++) {
    let sum = i, temp = i, list = [i];
    while (sum < target) {
      sum += ++temp; 
      list.push(temp);
    }
    if (sum === target) result.push(list);
  }
  return result;
};

console.log(findContinuousSequence(15));
`

module.exports = {
  codeOffer57_2
}