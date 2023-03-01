const code84 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num = (await readline()).match(/[A-Z]+/g).join('').length;
    console.log(num)
}()
`;

module.exports = {
  code84
}
