const code55 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const max = Number.parseInt(await readline());
    let result = 0;
    for(let i = 7; i <= max; i++) {
        if(i % 7 === 0 || ifHas7(i)) {
            result++;
        }
    }
    console.log(result);

    function ifHas7(n) {
        while(n) {
            if(n % 10 === 7) return true;
            n = Math.floor(n / 10);
        }
        return false;
    }
}()
`;

module.exports = {
  code55
}
