const code46 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = await readline();
    const num = Number.parseInt(await readline());
    console.log(str.slice(0, num));
}()
`;

module.exports = {
  code46
}
