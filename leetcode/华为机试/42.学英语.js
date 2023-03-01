const code42 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = await readline();
    const keyword = ['thousand', 'million', 'billion'];
    const map = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    const afterStr = str.replace(/\d(?=(\d{3})+$)/g, val => \`${val},\`);
    const res = afterStr.split(",").map((item, index, array) => {
        const len = array.length;
        const temp = number2english(item);
        if(temp === 'zero' && array[index - 1]) return ''
        return temp + (keyword[len - index - 2] !== undefined ? \` ${keyword[len - index - 2]} \` : '');
    });
    console.log(res.join(''));

    function number2english(n) {
        n = +n + '';
        const len = n.length;
        if(len === 0 || len === 1) return map[n];
        if(len === 2 && n < 20) return map[n];
        if(len === 2) {
            const temp1 = Math.floor(n / 10);
            const temp2 = n % 10;
            return \`${map[temp1 * 10]}\` + (temp2 === 0 ? '' : \` ${map[temp2]}\`);
        };
        if(len === 3) {
            const temp1 = Math.floor(n / 100);
            const temp2 = Math.floor(n / 10) % 10;
            const temp3 = n % 10;
            if(n % 100 < 20) return (temp1 === 0 ? '' : \`${map[temp1]} hundred\`) + (n % 100 === 0 ? '' : \` and ${map[n % 100]}\`);
            return (temp1 === 0 ? '' : \`${map[temp1]} hundred\`) + (temp2 === 0 ? '' : ' and ') + (temp2 === 0 ? '' : \`${map[temp2 * 10]}\`) + (temp3 === 0 ? '' : \` ${map[temp3]}\`);
        }
    }
}()
`;

module.exports = {
  code42
}
