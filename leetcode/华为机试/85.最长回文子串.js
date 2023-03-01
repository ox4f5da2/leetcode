const code85 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = await readline();
    let max = 0;
    for(let i = 0; i < str.length; i++) {
        const len1 = centerExpand(i, i);
        const len2 = centerExpand(i, i + 1);
        max = Math.max(max, len1, len2);
    }
    console.log(max);

    function centerExpand(left, right) {
        while(str[left] === str[right] && left >= 0 && right < str.length) {
            left--;
            right++;
        }
        return (right - 1) - (left + 1) + 1;
    }
}()
`;

module.exports = {
  code85
}
