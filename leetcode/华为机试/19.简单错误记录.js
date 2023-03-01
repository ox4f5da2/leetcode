const code19 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const errors = [];
    const logs = new Map();
    while(line = await readline()){
        errors.push(line);
    }
    for(const error of errors) {
        let [filePath, errorLine] = error.split(" ");
        filePath = filePath.split("\\").pop();
        filePath = filePath.length > 16 ? filePath.slice(-16) : filePath;
        const log = \`${filePath} ${errorLine}\`;
        logs.set(log, (logs.get(log) ?? 0) + 1);
    }
    for(const [log, num] of [...logs.entries()].slice(-8)) {
        console.log(log, num)
    }
}() 
`;

module.exports = {
  code19
}
