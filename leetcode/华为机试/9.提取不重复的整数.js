const code9 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num = await readline();
    const result = [...new Set(num.split("").reverse())].join("");
    console.log(result);
}()

`;

module.exports = {
  code9
}
