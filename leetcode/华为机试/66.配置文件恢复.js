const code66 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const map = [
        'reset board', 
        'board add', 
        'board delete',
        'reboot backplane',
        'backplane abort',
    ];
    const map2 = {
        'reset board': 'board fault',
        'board add': 'where to add', 
        'board delete': 'no board at all',
        'reboot backplane': 'impossible',
        'backplane abort': 'install first',
    }
    while(command = await readline()){
        console.log(matchCommand(command));
    }

    function matchCommand(command) {
        command = command.split(' ');
        if(command.length === 1) {
            return 'reset'.includes(command[0]) ? 'reset what' : 'unknown command';
        } else if(command.length === 2) {
            const reg = new RegExp(\`^${command[0]}.*? ${command[1]}.*$\`);
            const res = map.filter(item => reg.test(item));
            if(res.length === 1) {
                return map2[res[0]];
            } else {
                return 'unknown command';
            }
        }
    }
}()
`;

module.exports = {
  code66
}
