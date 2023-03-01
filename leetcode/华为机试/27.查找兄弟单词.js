const code27 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const str = (await readline()).split(' ');
    const k = str.pop();
    const target = str.pop();
    const map = str.slice(1).sort();
    const tagetMap = calc(target);

    const res = map.filter(item => isSiblingWord(item, target));
    console.log(res.length);
    res[k - 1] && console.log(res[k - 1]);
    
    function isSiblingWord(word, target) {
        if(word === target) return false;
        const wordMap = calc(word);
        const temp = Object.entries(tagetMap);
        if(Object.keys(wordMap).length !== temp.length) return false;
        for(const [key, val] of temp) {
            if(wordMap[key] !== val) return false;
        }
        return true;
    }

    function calc(word) {
        const map = {};
        const list = word.split('');
        for(const char of list) {
            map[char] = (map[char] ?? 0) + 1;
        }
        return map;
    }
}()
`;

module.exports = {
  code27
}
