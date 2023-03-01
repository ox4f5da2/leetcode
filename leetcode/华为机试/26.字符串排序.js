const code26 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = (await readline());
    const temp = str.match(/[a-zA-Z]+/g).join('').split('');
    const reg = /[a-zA-Z]/;
    temp.sort((a, b) => {
        const flag1 = reg.test(a), flag2 = reg.test(b);
        if(flag1 && flag2) {
            a = a.toLowerCase();
            b = b.toLowerCase();
            if(a.charCodeAt() < b.charCodeAt()) return -1;
            else if(a.charCodeAt() > b.charCodeAt()) return 1;
            else return 0;
        } else {
            return 0;
        }
    })
    let idx = 0, result = '';
    for(const char of str) {
        if(reg.test(char)) {
            result += temp[idx++];
        } else {
            result += char;
        }
    }
    console.log(result);
}()
`;

module.exports = {
  code26
}
