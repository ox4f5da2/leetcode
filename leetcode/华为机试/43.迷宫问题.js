const code43 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const [row, column] = (await readline()).split(' ').map(item => Number.parseInt(item));
    const array = [];
    while(line = await readline()){
        array.push(line.split(' ').map(item => Number.parseInt(item)));
    }
    const map = genMap(row, column);
    const result = [];
    go(0, 0);
    for(const [i, j] of result) {
        console.log(\`(${i},${j})\`);
    }

    function go(i, j) {
        if(i === row - 1 && j === column - 1) {
            result.push([i, j]);
            return true;
        }
        if(!ifExist(i, j) || map[i][j] || array[i][j] === 1) return false;
        map[i][j] = true;
        result.push([i, j]);
        const res = go(i - 1, j) || go(i + 1, j) || go(i, j - 1) || go(i, j + 1);
        if(!res) {
            while(true) {
                const temp = result[result.length - 1];
                if(ifAnyWay(...temp)) break;
                else result.pop();
            }
        }
        return res;
    }

    function ifAnyWay(i, j) {
        return (ifExist(i - 1, j) && !map[i - 1][j]) || (ifExist(i + 1, j) && !map[i + 1][j]) || (ifExist(i, j - 1) && !map[i][j - 1]) || (ifExist(i, j + 1) && !map[i][j + 1]);
    }

    function ifExist(i, j) {
        return (array[i] ?? false) && array[i][j] !== undefined;
    }

    function genMap(row, column) {
        const result = [];
        for(let i = 0; i < row; i++) {
            result.push(new Array(column).fill(false));
            for(let j = 0; j < column; j++) {
                if(array[i][j] === 1) result[i][j] = true;
            }
        }
        return result;
    }
}()
`;

module.exports = {
  code43
}
