const codeOffer36 = `
/**
 * @param {string[]} tokens
 * @return {number}
 */

function evalRPN(tokens) {
  let stack = [];
  const operation = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => ~~(b / a)
  }
  for (let i = 0, len = tokens.length; i < len; i++) {
    const opt = tokens[i];
    if (["+", "-", "*", "/"].includes(opt)) {
      stack.push(operation[opt](stack.pop(), stack.pop()));
    } else {
      stack.push(+opt);
    }
  }
  return stack[0];
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
`

module.exports = {
  codeOffer36
}