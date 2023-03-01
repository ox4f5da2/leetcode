const code63 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = await readline();
    const num = Number.parseInt(await readline());
    let start = 0, cnt = 0, max = 0;
    const result = [0, num - 1];
    for(let i = 0; i < num; i++) {
        if(ifValid(str[i])) cnt++;
    }
    max = cnt;
    for(let i = 1, len = str.length - num; i <= len; i++) {
        cnt += (ifValid(str[i - 1]) ? -1 : 0) + (ifValid(str[i + num - 1]) ? 1 : 0);
        if(cnt > max) {
            result[0] = i;
            result[1] = i + num - 1;
            max = cnt;
        }
    }
    console.log(str.slice(result[0], result[1] + 1));

    function ifValid(char) {
        return ['G', 'C'].includes(char);
    }
}()
`;

module.exports = {
  code63
}
