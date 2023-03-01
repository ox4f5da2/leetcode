const code57 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num1 = await readline();
    const num2 = await readline();
    let carry = 0;
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    let result = '';
    while(p1 >= 0 || p2 >= 0) {
        const temp = +(num1[p1] ?? 0) + +(num2[p2] ?? 0) + carry;
        carry = Math.floor(temp / 10);
        result = (temp % 10) + result;
        p1--;
        p2--;
    }
    if(carry === 1) result = 1 + result;
    console.log(result);
}()
`;

module.exports = {
  code57
}
