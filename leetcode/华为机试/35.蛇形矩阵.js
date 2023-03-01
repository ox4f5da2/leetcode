const code35 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    const n = Number.parseInt(await readline());
    const map = genMap(n);
    let cnt = 1;
    for(let i = 0; i < n; i++) {
        let row = i, column = 0;
        while(row >= 0) {
            map[row][column] = cnt;
            cnt++;
            row--;
            column++;
        }
    }
    for(let i = 0; i < n; i++) {
        console.log(map[i].join(" "));
    }
    
    function genMap(n) {
        const res = [];
        for (let i = 0; i < n; i++) {
            res.push([]);
        }
        return res;
    };
})();
`;

module.exports = {
  code35
}
