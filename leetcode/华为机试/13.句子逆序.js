const code13 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = await readline();
    console.log(str.split(" ").reverse().join(" "));
}()
`;

module.exports = {
  code13
}
