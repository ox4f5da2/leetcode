const code14 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num = await readline();
    const result = Array.from({ length: num });
    let cnt = 0;
    while(str = await readline()){
        result[cnt++] = str;
    }
    result.sort();
    for(const item of result) {
        console.log(item);
    }
}()
`;

module.exports = {
  code14
}
