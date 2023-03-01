const code77 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num = Number.parseInt(await readline());
    const id = (await readline()).split(' ').map(item => Number.parseInt(item));
    const copyid = [...id];
    id.sort((a, b) => a - b);

    const path = [], result = [];
    recursion();
    for(const item of result) {
        console.log(item.join(' '));
    }
    function recursion() {
        if(path.length === num && ifValidStackSequence(copyid, path)) {
            result.push([...path]);
        }
        for(let i = 0; i < num; i++) {
            if(path.includes(id[i])) continue;
            path.push(id[i]);
            recursion();
            path.pop();
        }
    }

    function ifValidStackSequence(origin, stackSequence) {
        const stack = [];
        let p1 = 0, p2 = 0;
        while(p2 < stackSequence.length && p1 < origin.length) {
            stack.push(origin[p1]);
            while(stack[stack.length - 1] === stackSequence[p2] && p2 < stackSequence.length) {
                stack.pop();
                p2++;
            }
            p1++;
        }
        return stack.length === 0;
    }
}()
`;

module.exports = {
  code77
}
