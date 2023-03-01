const code8 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num = await readline(), map = {};
    while(line = await readline()){
        let tokens = line.split(' ');
        let a = parseInt(tokens[0]);
        let b = parseInt(tokens[1]);
        map[a] = map[a] === undefined ? b : map[a] + b;
    }
    for(const [key, value] of Object.entries(map)) {
        console.log(key, value);
    }
}()

`;

module.exports = {
  code8
}
