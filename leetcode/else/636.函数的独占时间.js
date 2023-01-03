const code636 = `
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

// 没有通过
function formatOpt(opts) {
  return { id: opts[0], [opts[1]]: opts[2] };
}

function exclusiveTime(n, logs) {
  const result = new Array(n).fill(n), stack = [];
  logs.forEach(item => { 
    const opts = item.split(":");
    if (opts[1] === "start") {
      const top = stack[stack.length - 1];
      top ?? stack.push(formatOpt(opts));
      
    }
  });

};

console.log(exclusiveTime(2, ["0:start:0", "0:start:2", "0:end:5", "1:start:7", "1:end:7", "0:end:8"]));
`

module.exports = {
  code636
}