const code96 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = await readline();
    const res = str.replaceAll(/\d+/g, val => \`*${val}*\`);
    console.log(res);
}()
`;

module.exports = {
  code96
}
