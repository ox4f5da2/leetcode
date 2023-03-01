const code72 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    const line = Number.parseInt(await readline());
    for (let i = 0; i <= 20; i++) {
        for (let j = 0; j <= 33; j++) {
            for (let k = 1; k <= 100; k++) {
                if((5 * i + 3 * j + k / 3 === 100) && (i + k + j === 100)) {
                    console.log(\`${i} ${j} ${k}\`);
                }
            }
        }
    }
})();
`;

module.exports = {
  code72
}
