const code101 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const method = [
        (a, b) => a - b,
        (a, b) => b - a,
    ];
    const num1 = Number.parseInt(await readline());
    const num = (await readline()).split(' ').map(item => Number.parseInt(item));
    const num2 = Number.parseInt(await readline());
    console.log(num.sort(method[num2]).join(' '));
}()
`;

module.exports = {
  code101
}
