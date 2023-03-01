const code60 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

const map = [];
for(let i = 2; i <= 1000; i++) {
    if(isPrime(i)) map.push(i);
}

function isPrime(n) {
    for(let i = 2, len = Math.floor(Math.sqrt(n)); i <= len; i++) {
        if(n % i === 0) return false;
    }
    return true;
}

void async function () {
    // Write your code here
    const num = Number.parseInt(await readline());
    let left = 0, right = map.length - 1, mid = 0;
    while(left < right) {
        mid = Math.ceil((left + right) / 2);
        if(map[mid] <= num) left = mid;
        else right = mid - 1;
    }
    const list = map.slice(0, left + 1);
    const len = list.length;
    const map2 = new Map();
    let result = [-Infinity, Infinity];
    for(let i = 0; i < len; i++) {
        map2.set(list[i], true);
    }
    for(let i = 0; i < len; i++) {
        const temp = num - list[i];
        if(map2.get(temp) !== undefined) {
            result = Math.abs(list[i] - temp) < (result[1] - result[0]) ? [list[i], temp] : result;
        }
    }
    console.log(result[0]);
    console.log(result[1]);
}()
`;

module.exports = {
  code60
}
