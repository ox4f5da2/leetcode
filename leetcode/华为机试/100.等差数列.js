const code100 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num = Number.parseInt(await readline());
    console.log(2 * num + 3 * num * (num - 1) / 2);
}()
`;

module.exports = {
  code100
}
