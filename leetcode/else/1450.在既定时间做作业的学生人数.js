const code1450 = `
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */

function busyStudent(startTime, endTime, queryTime) {
  let result = 0;
  startTime.forEach((item, index) =>
    (queryTime >= item && queryTime <= endTime[index]) && result++);
  return result;
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
`

module.exports = {
  code1450
}