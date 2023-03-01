const code103 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num = Number.parseInt(await readline());
    const list = (await readline()).split(' ').map(item => Number.parseInt(item));
    const dp = [];
    let max = 0;
    for(let i = 0; i < list.length; i++) {
        dp[i] = 1;
        const item = list[i];
        for(let j = 0; j < i; j++) {
            if(list[j] < item) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
        max = Math.max(max, dp[i]);
    }
    console.log(max);
}()
`;

module.exports = {
  code103
}
