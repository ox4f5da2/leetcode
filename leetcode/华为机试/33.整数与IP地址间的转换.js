const code33 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const ip = await readline();
    const number = Number.parseInt(await readline());
    console.log(ip2number(ip));
    console.log(number2ip(number));
    
    function ip2number(ip) {
        const list = ip.split(".");
        const res = list.map(item => Number.parseInt(item).toString(2).padStart(8, '0'));
        return Number.parseInt(res.join(""), 2);
    }

    function number2ip(number) {
        const str = number.toString(2).padStart(32, '0');
        const res = str.match(/\d{8}/g);
        return res.map(item => Number.parseInt(item, 2)).join(".");
    }
}()
`;

module.exports = {
  code33
}
