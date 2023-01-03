const code1460 = `
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */

function canBeEqual(target, arr) {
  let map = new Map(), flag = true;
  target.forEach(item => {
    const temp = map.get(item);
    if (temp) map.set(item, temp + 1);
    else map.set(item, 1);
  });
  for (let item of arr) {
    const temp = map.get(item);
    if (!temp) {
      flag = false;
      break;
    }
    map.set(item, temp - 1);
  }
  return flag && [...map.values()].filter(item => item !== 0).length === 0;
};

console.log(canBeEqual([1, 2, 3, 4], [1, 2, 3, 4]));
`

module.exports = {
  code1460
}