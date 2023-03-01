const code31 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = (await readline()).match(/\w+/g);
    console.log(str.reverse().join(' '));
}()
`;

module.exports = {
  code31
}
