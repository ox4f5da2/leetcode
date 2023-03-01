const code38 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let height = await readline();
    let copyHeight = height;
    let allHeight = 0;
    for(let i = 0; i < 5; i++) {
        allHeight += height * 2;
        height /= 2;
    }
    console.log(allHeight - copyHeight);
    console.log(copyHeight / (2 ** 5));
}()
`;

module.exports = {
  code38
}
