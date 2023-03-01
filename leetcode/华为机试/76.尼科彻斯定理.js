const code76 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

const array = Object.keys(Array.from({ length: 5050 })).map(item => 2 * item + 1);

void async function () {
    // Write your code here
    const num = Number.parseInt(await readline());
    const target = num ** 3;
    let left = 0, right = num - 1;
    let sum = array.slice(left, right + 1).reduce((pre, curr) => pre += curr, 0);
    left++;
    right++;
    while(sum !== target) {
        sum = sum - array[left - 1] + array[right];
        if(sum === target) break;
        left++;
        right++;
    }
    console.log(array.slice(left, right + 1).join('+'));
}()
`;

module.exports = {
  code76
}
