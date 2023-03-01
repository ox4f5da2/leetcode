const code99 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num = Number.parseInt(await readline());
    let cnt = 0;
    for(let i = 0; i <= num; i++) {
        isSelfControlledNumber(i) && cnt++;
    }
    console.log(cnt);

    function isSelfControlledNumber(n) {
        return (n * n + '').endsWith(n);
    }
}()
`;

module.exports = {
  code99
}
