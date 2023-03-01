const code92 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()) {
        const res = line.match(/\d+/g);
        res.sort((a, b) => b.length - a.length);
        let p = 0;
        for(let i = 1; i < res.length; i++) {
            if(res[i].length === res[0].length) {
                p = i;
            } else {
                break;
            }
        }
        console.log(\`${res.slice(0, p + 1).join('')},${res[0].length}\`);
    }
}()
`;

module.exports = {
  code92
}
