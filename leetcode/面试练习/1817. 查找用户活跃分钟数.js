const code1817 = `
/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */

function findingUsersActiveMinutes(logs, k) {
  const map1 = new Map(), map2 = new Map(), result = [];
  for (let i = 0, len = logs.length; i < len; i++) {
    const [id, time] = logs[i], temp = map1.get(id);
    temp === undefined ? map1.set(id, new Set([time])) : temp.add(time);
  }
  [...map1.entries()].forEach(item => {
    const size = item[1].size, temp = map2.get(size);
    map2.set(size, (temp ?? 0) + 1);
  })
  for (let i = 0; i < k; i++) {
    result[i] = map2.get(i + 1) ?? 0;
  }
  return result;
};

console.log(findingUsersActiveMinutes([[0, 5], [1, 2], [0, 2], [0, 5], [1, 3]], 5));
`

module.exports = {
  code1817
}