const code15 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let num = Number.parseInt(await readline());
    let cnt = 0;
    while(num > 0) {
        if(num & 1 === 1) {
            cnt++;
        }
        num = num >> 1;
    }
    console.log(cnt);
}()
`;

module.exports = {
  code15
}
