const code5 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = (await readline()).slice(2).toLowerCase();
    const map = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15
    }
    let result = 0;
    for(let char of str) {
        result = result * 16 + map[char];
    }
    console.log(result);
}()
`;

module.exports = {
  code5
}
