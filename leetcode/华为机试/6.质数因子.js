const code6 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let num = Number.parseInt(await readline());
    let str = '';
    for(let i = 2, len = Math.floor(Math.sqrt(num)); i <= len; i++) {
        while(num % i === 0) {
            str += \`${i} \`;
            num = num / i;
        }
    }
    if(str === '') console.log('' + num);
    else {
        if(num !== 1) {
            str += \`${num}\`;
        }
        console.log(str);
    }
}()

`;

module.exports = {
  code6
}
