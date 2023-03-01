const code94 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num1 = Number.parseInt(await readline());
    const type1 = (await readline()).split(' ');
    const num2 = Number.parseInt(await readline());
    const type2 = (await readline()).split(' ');

    const map = {};
    type1.forEach(item => map[item] = 0);
    map['Invalid'] = 0;
    type2.forEach(item => map[item] !== undefined ? map[item]++ : map['Invalid']++);
    for(const [key, val] of Object.entries(map)) {
        console.log(\`${key} : ${val}\`);
    }
}()
`;

module.exports = {
  code94
}
