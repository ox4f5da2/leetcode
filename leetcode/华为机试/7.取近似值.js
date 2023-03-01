const code7 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = (await readline()).split(".");
    const num = Number.parseInt(str[0]) + (str[1][0] >= 5 ? 1 : 0);
    console.log(num);
}()
`;

module.exports = {
  code7
}
