const code39 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(subnetMaskCode = await readline()){
        const ip1 = await readline();
        const ip2 = await readline();
        console.log(judge(subnetMaskCode, ip1, ip2));
    }

    function ifIPValid(ip) {
        return ip.split('.').every(item => {
            item = Number.parseInt(item);
            return item >= 0 && item <= 255;
        })
    }

    function ifMaskValid(ip) {
        const res = ip.split('.');
        if(!ifIPValid(ip)) return false;
        const temp = res.map(item => (+item).toString(2).padStart(8, '0')).join('');
        const reg = /^(1+)(0*)$/
        return reg.test(temp);
    }

    function AND(subnetMaskCode, ip) {
        const res1 = subnetMaskCode.split('.');
        const res2 = ip.split('.');
        return res1.map((item, index) => item & res2[index]).join('.');
    }

    function judge(subnetMaskCode, ip1, ip2) {
        if(!ifMaskValid(subnetMaskCode) || !ifIPValid(ip1) || !ifIPValid(ip2)) return 1;
        const res1 = AND(subnetMaskCode, ip1);
        const res2 = AND(subnetMaskCode, ip2);
        return res1 === res2 ? 0 : 2;
    }
}()
`;

module.exports = {
  code39
}
