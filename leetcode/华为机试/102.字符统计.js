const code102 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = await readline();
    const map = str.split('').reduce((pre, curr) => (pre[curr] = (pre[curr] ?? 0) + 1, pre), {});
    const result = Object.entries(map).sort((a, b) => {
        if(a[1] > b[1]) return -1;
        else if(a[1] < b[1]) return 1;
        else {
            if(a[0] > b[0]) return 1;
            else if(a[0] < b[0]) return -1;
        }
    })
    const list = [];
    for(const [key, val] of result) {
        list.push(key);
    }
    console.log(list.join(''))
}()
`;

module.exports = {
  code102
}
