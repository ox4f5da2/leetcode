const code2 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = (await readline()).toLowerCase();
    const target = (await readline()).toLowerCase();
    const map = {};
    for(const char of str) {
        map[char] = (map[char] ?? 0) + 1;
    }
    console.log(map[target]);
}()
`;

module.exports = {
  code2
}