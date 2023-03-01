const code3 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num = await readline();
    const list = [];
    while(line = await readline()) {
        list.push(Number.parseInt(line));
    }
    const result = [...new Set(list)].sort((a, b) => a - b);
    for(let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}()
`

module.exports = {
  code3;
}