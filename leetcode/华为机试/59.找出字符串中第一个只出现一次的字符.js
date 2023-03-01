const code59 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = (await readline()).split('');
    const map = new Map();
    for(const char of str) {
        map.set(char, (map.get(char) ?? 0) + 1);
    }
    const result = [...map.entries()].find(item => item[1] === 1);
    console.log(result ? result[0] : -1);
}()
`;

module.exports = {
  code59
}
