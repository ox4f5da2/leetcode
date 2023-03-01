const code53 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let n = Number.parseInt(await readline());
    const result = [2, 3, 2, 4];
    if(n === 1 || n === 2) {
        console.log(-1);
    } else {
        console.log(result[(n - 3) % 4]);
    }
}()
`;

module.exports = {
  code53
}
