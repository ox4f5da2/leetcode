const code1598 = `
/**
 * @param {string[]} logs
 * @return {number}
 */

function minOperations(logs) {
  let stack = [];
  for (let item of logs) {
    if (item === "./") continue;
    else if (item === "../") stack.pop();
    else stack.push(item);
  }
  return stack.length;
};

console.log(minOperations(["d1/", "../", "../", "../"]));
`

module.exports = {
  code1598
}