const code22 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const list = [];
    while(line = await readline()){
        list.push(Number.parseInt(line));
    }
    list.pop();
    for(const num of list) {
        console.log(count(num));
    }
    
    function count(n) {
        let rest = 0, result = 0;
        while(n) {
            n = n + rest;
            const temp = Math.floor(n / 3);
            result += temp;
            rest = n % 3;
            n = temp;
            if(n + rest === 2) {
                result++;
                break;
            }
        }
        return result;
    }
}()
`;

module.exports = {
  code22
}
