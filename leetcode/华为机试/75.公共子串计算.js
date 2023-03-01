const code75 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str1 = await readline();
    const str2 = await readline();
    let short_str = '', long_str = '';
    if(str1.length >= str2.length) {
        long_str = str1;
        short_str = str2;
    } else {
        long_str = str2;
        short_str = str1;
    }
    let maxSubStringLength = 0;
    for(let start = 0; start < short_str.length; start++) {
        for(let end = start + 1; end <= short_str.length; end++) {
            const substr = short_str.slice(start, end);
            if(long_str.includes(substr)) {
                maxSubStringLength = Math.max(maxSubStringLength, substr.length);
            }
        }
    }
    console.log(maxSubStringLength);
}()
`;

module.exports = {
  code75
}
