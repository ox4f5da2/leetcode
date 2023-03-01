const code1 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const line = await readline();
    console.log(line.split(" ").pop().length);
}()
`;

module.exports = {
  code1
}