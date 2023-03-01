const code86 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num = Number.parseInt(await readline()).toString(2).match(/1+/g);
    let max = 0;
    for(const item of num) {
        max = Math.max(max, item.length);
    }
    console.log(max);
}()
`;

module.exports = {
  code86
}
