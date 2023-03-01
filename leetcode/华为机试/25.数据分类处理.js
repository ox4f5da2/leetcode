const code25 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let I = process(await readline());
    let R = [...new Set(process(await readline()).sort((a, b) => a - b))];
    let cnt = 0, result = [];
    for(const item of R) {
        const reg = new RegExp(\`${item}\`);
        const res = I.map((number, index) => {
            if(reg.test(number)) {
                return \`${index} ${number}\`;
            }
            return '';
        }).filter(item => item !== '');
        if(res.length) {
            cnt += (res.length + 1) * 2;
            res.unshift(item, res.length);
        }
        result = [...result, ...res];
    }
    cnt && result.unshift(cnt);
    console.log(result.join(' '));

    function process(str) {
        let list = str.split(' ');
        list.shift();
        return list.map(item => Number.parseInt(item));
    }
}()
`;

module.exports = {
  code25
}
