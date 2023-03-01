const code29 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    const raw = await readline();
    const encoded = await readline();
    const a = "a".charCodeAt();
    const z = "z".charCodeAt();
    const A = "A".charCodeAt();
    const Z = "Z".charCodeAt();
    const str_0 = "0".charCodeAt();
    const str_9 = "9".charCodeAt();

    console.log(encodeStr(raw));
    console.log(decodeStr(encoded));

    function encodeStr(str) {
        let encode_str = "";
        for (const char of str) {
            const code = char.charCodeAt();
            if (code >= a && code <= z) {
                encode_str += String.fromCharCode(((code - a + 1) % 26) + A);
            } else if (code >= A && code <= Z) {
                encode_str += String.fromCharCode(((code - A + 1) % 26) + a);
            } else if (code >= str_0 && code <= str_9) {
                encode_str += String.fromCharCode(
                    ((code - str_0 + 1) % 10) + str_0
                );
            }
        }
        return encode_str;
    }

    function decodeStr(str) {
        let raw_str = "";
        for (const char of str) {
            const code = char.charCodeAt();
            if (code >= a && code <= z) {
                const temp = (code - a - 1) % 26;
                raw_str += String.fromCharCode((temp < 0 ? 25 : temp) + A);
            } else if (code >= A && code <= Z) {
                const temp = (code - A - 1) % 26;
                raw_str += String.fromCharCode((temp < 0 ? 25 : temp) + a);
            } else if (code >= str_0 && code <= str_9) {
                const temp = (code - str_0 - 1) % 10;
                raw_str += String.fromCharCode(
                    (temp < 0 ? 9 : temp) + str_0
                );
            }
        }
        return raw_str;
    }

})();
`;

module.exports = {
  code29
}
