const code58 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num = +(await readline()).split(' ').pop();
    const list = (await readline()).split(' ').map(item => Number.parseInt(item)).sort((a, b) => a - b);
    console.log(list.slice(0, num).join(' '));
}()
`;

module.exports = {
  code58
}
