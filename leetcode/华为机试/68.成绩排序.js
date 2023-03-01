const code68 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num = Number.parseInt(await readline());
    const method = Number.parseInt(await readline()) ? (a, b) => a.score - b.score : (a, b) => b.score - a.score;
    const people = [];
    while(line = await readline()){
        const [name, score] = line.split(" ");
        people.push({
            name,
            score: Number.parseInt(score)
        });
    }
    people.sort(method);
    for(const item of people) {
        console.log(\`${item.name} ${item.score}\`);
    }
}()
`;

module.exports = {
  code68
}
