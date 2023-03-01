const code70 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let num = Number.parseInt(await readline());
    const matrix = {};
    const A = 'A'.charCodeAt();
    let cnt = 0;
    while(num){
        const [row, column] = (await readline()).split(' ').map(item => Number.parseInt(item));
        matrix[String.fromCharCode(A + cnt)] = {
            row,
            column
        }
        cnt++;
        num--;
    };
    const str = await readline();
    const stack = [];
    for(const char of str) {
        if(!['(', ')'].includes(char)) {
            stack.push(char);
        } else if(char === ')') {
            const { row: row1, column: column1 } = matrix[stack.pop()];
            const { row: row2, column: column2 } = matrix[stack.pop()];
            num += row2 * column2 * column1;
            const currentChar = String.fromCharCode(A + cnt);
            matrix[currentChar] = {
                row: row2,
                column: column1
            };
            stack.push(currentChar);
            cnt++;
        }
    };
    console.log(num);
}()
`;

module.exports = {
  code70
}
