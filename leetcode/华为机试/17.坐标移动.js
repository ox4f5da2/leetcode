const code17 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const controller = (await readline()).split(";");
    const reg = /^(?<dir>[ASWD])(?<num>\d{1,2})$/;
    const postion = { x: 0, y: 0 };
    const method = {
        'A': num => postion.x -= +num,
        'D': num => postion.x += +num,
        'W': num => postion.y += +num,
        'S': num => postion.y -= +num,
    }
    for(const step of controller) {
        let res = step.match(reg);
        if(res) {
            const { dir, num } = res.groups;
            method[dir](num);
        }
    }
    console.log(\`${postion.x},${postion.y}\`);
}()
`;

module.exports = {
  code17
}
