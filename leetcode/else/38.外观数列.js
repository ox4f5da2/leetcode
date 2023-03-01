const code38 = `
/**
 * @param {number} n
 * @return {string}
 */

function countAndSay(n) {
  let str = "1", cnt = 1;
  while (cnt < n) {
    let reg = /(?<same>(\d)(\2)*)/g, temp = "", result = "";
    while (temp = reg.exec(str)) {
      temp = temp.groups.same;
      result += \`${temp.length}${temp[0]}\`;
    }
    str = result;
    cnt++;
  }
  return str;
};

console.log(countAndSay(3));
`

module.exports = {
  code38
}