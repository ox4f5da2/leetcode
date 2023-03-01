const code97 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num = Number.parseInt(await readline());
    const list = (await readline()).split(' ').map(item => Number.parseInt(item));
    const negativeNumber = [];
    const positiveNumber = [];
    for(const item of list) {
        if(item > 0) positiveNumber.push(item);
        else if(item < 0) negativeNumber.push(item);
    }
    let average = positiveNumber.length !== 0 ? positiveNumber.reduce((pre, curr) => pre += curr, 0) / positiveNumber.length : 0;
    console.log(\`${negativeNumber.length} ${average.toFixed(1)}\`);
}()
`;

module.exports = {
  code97
}
