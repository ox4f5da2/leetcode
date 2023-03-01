const code36 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const key = await readline();
    const str = await readline();
    const a = 'a'.charCodeAt();
    const map = {};
    const res = [...new Set(key)];
    const alpha = new Map();
    for(let i = 0; i < 26; i++) {
        alpha.set(String.fromCharCode(a + i), true);
    }
    for(let i = 0; i < res.length; i++) {
        map[String.fromCharCode(a + i)] = res[i];
        alpha.delete(res[i]);
    }
    let delta = res.length;
    for(const rest of alpha.keys()) {
        map[String.fromCharCode(a + delta)] = rest;
        delta++;
    }
    let result = '';
    for(const char of str) {
        result += map[char];
    }
    console.log(result);
}()
`;

module.exports = {
  code36
}
