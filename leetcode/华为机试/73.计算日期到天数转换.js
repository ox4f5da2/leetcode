const code73 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let [year, month, day] = (await readline()).split(' ').map(item => +item);
    const monthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    ifLeapYear(year) && (monthList[1] = 29);
    let cnt = 0, idx = 0;
    while(month > 1) {
        cnt += monthList[idx];
        idx++;
        month--;
    }
    console.log(cnt + day);

    function ifLeapYear(n) {
        if(n % 100 === 0) {
            return n % 400 === 0;
        }
        return n % 4 === 0;
    }
}()
`;

module.exports = {
  code73
}
