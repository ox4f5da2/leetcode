const code80 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num1 = await readline();
    const list1 = (await readline()).split(' ').map(item => Number.parseInt(item));
    const num2 = await readline();
    const list2 = (await readline()).split(' ').map(item => Number.parseInt(item));
    console.log([...new Set([...list1, ...list2])].sort((a, b) => a - b).join(''));
}()
`;

module.exports = {
  code80
}
