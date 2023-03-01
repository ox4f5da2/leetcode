const code10 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = await readline();
    const map = {};
    for(const char of str) {
        const code = char.charCodeAt();
        if(code >= 0 && code <= 127) {
            map[char] = map[char] ?? true;
        }
    }
    console.log(Object.keys(map).length);
}()

`;

module.exports = {
  code10
}
