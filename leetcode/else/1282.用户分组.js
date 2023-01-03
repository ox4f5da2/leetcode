const code1282 = `
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

function groupThePeople(groupSizes) {
  const map = new Map(), result = [];
  groupSizes.forEach((item, index) => { 
    const bucket = map.get(item);
    if (!bucket) map.set(item, [index]);
    else bucket.push(index);
  });
  [...map.entries()].forEach(item => {
    const everyNum = item[0], list = item[1], len = list.length;
    let cnt = 0;
    while (cnt < len) {
      result.push(list.slice(cnt, cnt + everyNum));
      cnt += everyNum;
    }
  })
  return result;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
`

module.exports = {
  code1282
}