const code74 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const command = (await readline()) + ' ';
    const stack = [], result = [];
    let cnt = 0, flag = false;
    for(const char of command) {
        if(char === '"') {
            flag = !flag;
        } else if(char !== ' ') {
            stack.push(char);
        } else if(char === ' ') {
            if(!flag) {
                result.push(stack.join(''));
                stack.length = 0;
            } else {
                stack.push(char);
            }
        }
    }
    console.log(result.length);
    for(const char of result) {
        console.log(char)
    }
}()
`;

module.exports = {
  code74
}
