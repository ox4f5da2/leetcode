const code40 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str =  await readline();
    const codea = 'a'.charCodeAt();
    const codez = 'z'.charCodeAt();
    const code0 = '0'.charCodeAt();
    const code9 = '9'.charCodeAt();
    const codeSpace = ' '.charCodeAt();
    let letter = 0;
    let space = 0;
    let number = 0;
    let other = 0;
    for(const char of str) {
        const code = char.charCodeAt();
        if(code >= codea && code <= codez) {
            letter++;
        } else if(code >= code0 && code <= code9) {
            number++;
        } else if(code === codeSpace) {
            space++;
        } else {
            other++;
        }
    }
    console.log(letter);
    console.log(space);
    console.log(number);
    console.log(other);
}()
`;

module.exports = {
  code40
}
