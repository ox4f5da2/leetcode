const code56 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const max = Number.parseInt(await readline());
    let result = 0;
    for(let i = 1; i <= max; i++) {
        if(ifPerfectNumber(i)) {
            result++;
        }
    }
    console.log(result);

    function ifPerfectNumber(n) {
        if(n === 1) return false;
        const list = [];
        for(let i = 1, len = Math.floor(Math.sqrt(n)); i <= len; i++) {
            if(n % i === 0) {
                const temp = n / i;
                if(temp === i || temp === n) {
                    list.push(i);
                } else if(temp !== i) {
                    list.push(temp, i);
                }
            }
        }
        return list.reduce((pre, curr) => pre += curr, 0) === n; 
    }
}()
`;

module.exports = {
  code56
}
