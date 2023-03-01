const code81 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str1 = await readline();
    const str2 = await readline();
    const map1 = countLetters(str1);
    const map2 = countLetters(str2);
    console.log(Object.entries(map1).sort((a, b) => a[0] - b[0]));
    console.log(Object.entries(map2).sort((a, b) => a[0] - b[0]));
    let flag = true;
    for(const [key, val] of Object.entries(map1)) {
        if(map2[key] === undefined || map2[key] < val) {
            flag = false;
            break;
        }
    }
    console.log('' + flag);

    function countLetters(str) {
        return str.split('').reduce((pre, curr) => (pre[curr] = (pre[curr] ?? 0) + 1, pre) , {});
    }
}()
`;

module.exports = {
  code81
}
