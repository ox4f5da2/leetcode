const code90 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const ip = (line = await readline()).split('.');
    const flag = ip.every(item => /^(1[0-9][0-9])$|^(2([0-4][0-9]|5[0-5]))$|^([1-9][0-9])$|^[0-9]$/.test(item));
    console.log(ip.length === 4 && flag ? 'YES' : 'NO');
}()
`;

module.exports = {
  code90
}
