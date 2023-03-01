const code30 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const [str1, str2] = (await readline()).split(" ");
    const str = str1 + str2;
    const even = [], odd = [];
    for(let i = 0, len = str.length; i < len; i++) {
        i % 2 ? odd.push(str[i]) : even.push(str[i]);
    }
    even.sort();
    odd.sort();
    let newStr = '', even_p = 0, odd_p = 0;
    while(even_p < even.length || odd_p < odd.length) {
        newStr += \`${even[even_p] ?? ''}${odd[odd_p] ?? ''}\`;
        even_p++;
        odd_p++;
    }
    const code0 = '0'.charCodeAt();
    const code9 = '9'.charCodeAt();
    const codea = 'a'.charCodeAt();
    const codef = 'f'.charCodeAt();
    const codeA = 'A'.charCodeAt();
    const codeF = 'F'.charCodeAt();
    const map = {
        0: '0000',
        1: '0001',
        2: '0010',
        3: '0011',
        4: '0100',
        5: '0101',
        6: '0110',
        7: '0111',
        8: '1000',
        9: '1001',
        a: '1010',
        b: '1011',
        c: '1100',
        d: '1101',
        e: '1110',
        f: '1111'
    }
    let result = '';
    for(let char of newStr) {
        const code = char.charCodeAt();
        if(code >= code0 && code <= code9) {
            result += getCode(char);
        } else if(code >= codea && code <= codef) {
            result += getCode(char);
        } else if(code >= codeA && code <= codeF) {
            result += getCode(char.toLowerCase());
        } else {
            result += char;
        }
    }
    console.log(result);

    function getCode(char) {
        const num = Number.parseInt(map[char].split("").reverse().join(""), 2);
        const afterChar = num.toString(16);
        return afterChar.toUpperCase();
    }
}()
`;

module.exports = {
  code30
}
