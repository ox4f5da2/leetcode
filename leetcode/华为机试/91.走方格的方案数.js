const code91 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const [row, column] = (await readline()).split(' ').map(item => Number.parseInt(item));
    const dp = [];
    for(let i = 0; i <= row; i++) {
        dp.push([]);
        for(let j = 0; j <= column; j++) {
            if(i === 0 || j === 0) dp[i][j] = 1;
            else dp[i][j] = 0;
        }
    }
    for(let i = 1; i <= row; i++) {
        for(let j = 1; j <= column; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    console.log(dp[row][column])
}()
`;

module.exports = {
  code91
}
