const code32 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = await readline(), len = str.length;
    let result = 0;
    for(let i = 0; i < len; i++) {
        const len1 = expandCenter(i, i);
        const len2 = expandCenter(i, i + 1);
        result = Math.max(result, len1, len2);
    }
    console.log(result);

    function expandCenter(start, end) {
        while(start >= 0 && end < len && str[start] === str[end]) {
            start--;
            end++;
        }
        return (end - 1) - (start + 1) + 1;
    }
}()
`;

module.exports = {
  code32
}
