const code45 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = [];
    const num = Number.parseInt((await readline()));
    while(line = await readline()) {
        str.push(line);
    }
    str.forEach(item => console.log(fn(item)));

    function fn(str) {
        const map = new Map();
        let result = 0;
        for(const char of str) {
            map.set(char, (map.get(char) ?? 0) + 1);
        }
        const res = [...map.entries()];
        res.sort((a, b) => b[1] - a[1]);
        let score = 26;
        for(const item of res) {
            result += score * item[1];
            score--;
        }
        return result;
    }
    
}()
`;

module.exports = {
  code45
}
