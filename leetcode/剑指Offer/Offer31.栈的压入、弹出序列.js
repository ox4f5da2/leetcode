const codeOffer31 = `
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

function validateStackSequences(pushed, popped) {
  let stack = [], idx = 0, len = popped.length;
  if (len === 0 && pushed.length === 0) return true;
  while (true) {
    if (stack.at(-1) !== popped[idx]) {
      let temp = pushed.shift();
      if (temp !== undefined) stack.push(temp);
      else return false;
    }
    else {
      stack.pop();
      idx++;
    }
    if (idx === len) break;
  }
  return true;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
`

module.exports = {
  codeOffer31
}