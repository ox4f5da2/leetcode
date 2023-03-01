const code54 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    console.log(eval(await readline()));
}()
`;

module.exports = {
  code54
}
