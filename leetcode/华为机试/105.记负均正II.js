const code = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const positiveNumber = [];
    const negativeNumber = [];
    while(line = await readline()){
        const temp = Number.parseInt(line);
        temp > 0 && positiveNumber.push(temp);
        temp < 0 && negativeNumber.push(temp);
    }
    const average = positiveNumber.length ? positiveNumber.reduce((pre, curr) => pre += curr, 0) / positiveNumber.length : 0;
    console.log(negativeNumber.length);
    console.log(average.toFixed(1));
}()
`;

module.exports = {
  code
}
