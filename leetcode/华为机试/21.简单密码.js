const code21 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = await readline();
    const a = 'a'.charCodeAt();
    const z = 'z'.charCodeAt();
    const A = 'A'.charCodeAt();
    const Z = 'Z'.charCodeAt();
    const map = {
        a: 2,
        b: 2,
        c: 2,
        d: 3,
        e: 3,
        f: 3,
        g: 4,
        h: 4,
        i: 4,
        j: 5,
        k: 5,
        l: 5,
        m: 6,
        n: 6,
        o: 6,
        p: 7,
        q: 7,
        r: 7,
        s: 7,
        t: 8,
        u: 8,
        v: 8,
        w: 9,
        x: 9,
        y: 9,
        z: 9,
    }
    let result = '';
    for(const char of str) {
        const code = char.charCodeAt();
        const isLowerCase = code >= a && code <= z;
        const isUpperCase = code >= A && code <= Z;
        if(isLowerCase) {
            result += map[char];
        } else if(isUpperCase) {
            result += String.fromCharCode((code - A + 1) % 26 + a);
        } else {
            result += char;
        }
    }
    console.log(result);
}()
`;

module.exports = {
  code21
}
