const code23 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = await readline();
    const map = new Map();
    for(const char of str) {
        map.set(char, (map.get(char) ?? 0) + 1);
    }
    const minNum = [...map.values()].sort((a, b) => a - b).shift();
    const deleteChar = [...map.entries()].filter(item => item[1] == minNum).map(item => item[0]);
    let result = '';
    for(const char of str) {
        if(!deleteChar.includes(char)) {
            result += char;
        }
    }
    console.log(result);
}()
`;

module.exports = {
  code23
}
