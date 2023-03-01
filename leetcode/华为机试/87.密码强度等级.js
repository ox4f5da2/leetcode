const code87 = `
  const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = await readline();
    const passwordLength = [
        len => len >= 0,
        len => len >= 5,
        len => len >= 8
    ];
    const passwordLengthScore = [0, 5, 10, 25];
    const letter = [
        str => /[a-zA-Z]/.test(str),
        str => /^((?=.*[a-z])|(?=.*[A-Z]))/.test(str),
        str => /^(?=.*[a-z])(?=.*[A-Z])/.test(str),
    ];
    const letterScore = [0, 10, 10, 20];
    const number = [
        str => /\d/.test(str),
        str => /\d/.test(str),
        str => /\d.*?\d/.test(str),
    ];
    const numberSocre = [0, 0, 10, 20];
    const symbol = [
        str => /[!"#$%&'()*+,-./:;<=>?@\[\\\]\^_\`{\|}~]/.test(str),
        str => /[!"#$%&'()*+,-./:;<=>?@\[\\\]\^_\`{\|}~]/.test(str),
        str => /[!"#$%&'()*+,-./:;<=>?@\[\\\]\^_\`{\|}~].*[!"#$%&'()*+,-./:;<=>?@\[\\\]\^_\`{\|}~]/.test(str),
    ];
    const symbolSocre = [0, 0, 10, 25];
    const prize = [
        str => /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(str),
        str => /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@\[\\\]\^_\`{\|}~])/.test(str),
        str => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@\[\\\]\^_\`{\|}~])/.test(str),
    ];
    const prizeScore = [0, 2, 3, 5];
    let score = 0;
    score += passwordLengthScore[passwordLength.filter(fn => fn(str.length)).length];
    score += letterScore[letter.filter(fn => fn(str)).length];
    score += numberSocre[number.filter(fn => fn(str)).length];
    score += symbolSocre[symbol.filter(fn => fn(str)).length];
    score += prizeScore[prize.filter(fn => fn(str)).length];
    if(score >= 90) console.log('VERY_SECURE');
    else if(score >= 80) console.log('SECURE');
    else if(score >= 70) console.log('VERY_STRONG');
    else if(score >= 60) console.log('STRONG');
    else if(score >= 50) console.log('AVERAGE');
    else if(score >= 25) console.log('WEAK');
    else if(score >= 0) console.log('VERY_WEAK');
}()
`;

module.exports = {
  code87
}
