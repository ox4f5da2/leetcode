const code69 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let row1 = Number.parseInt(await readline());
    let row2 = Number.parseInt(await readline());
    let column = await readline();
    const matrix1 = [];
    const matrix2 = [];
    let copyrow1 = row1;
    let copyrow2 = row2;
    while(copyrow1){
        matrix1.push((await readline()).split(' ').map(item => Number.parseInt(item)));
        copyrow1--;
    };
    while(copyrow2){
        matrix2.push((await readline()).split(' ').map(item => Number.parseInt(item)));
        copyrow2--;
    };
    const matrix3 = [];
    for(let i = 0; i < row1; i ++) {
        matrix3.push(new Array(column).fill(0));
    }
    for(let i = 0; i < row1; i++) {
        const row = matrix1[i];
        for(let j = 0; j < column; j++) {
            let res = 0;
            row.forEach((item, index) => {
                res += item * matrix2[index][j];
            });
            matrix3[i][j] = res;
        }
    }
    for(const row of matrix3) {
        console.log(row.join(' '));
    }
}()
`;

module.exports = {
  code69
}
