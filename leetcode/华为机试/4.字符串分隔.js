const code4 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let str = await readline();
    const len = str.length;
    if(len > 0) {
        str = str.padEnd(Math.ceil(len / 8) * 8, '0');
        let temp = '';
        for(let char of str) {
            temp += char;
            if(temp.length === 8) {
                console.log(temp);
                temp = '';
            }
        }
    } else {
        console.log(str);
    }
}()

`;

module.exports = {
  code4
}
