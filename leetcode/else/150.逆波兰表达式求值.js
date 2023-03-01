const code150 = `
/**
 * @param {string[]} tokens
 * @return {number}
 */

function str2num(str) {
  return Number.parseInt(str);
}

function evalRPN(tokens) {
  let stack = [], temp1 = 0, temp2 = 0;
  tokens.forEach(item => {
    switch (item) {
      case '+':
        stack.push(stack.pop() + stack.pop());
        break;
      case '-':
        temp1 = stack.pop();
        temp2 = stack.pop();
        stack.push(temp2 - temp1);
        break;
      case '*':
        stack.push(stack.pop() * stack.pop());
        break;
      case '/':
        temp1 = stack.pop();
        temp2 = stack.pop();
        stack.push((~~(temp2 / temp1)));
        break;
      default:
        stack.push(str2num(item));
        break;
    }
  });
  return stack.pop();
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
`

module.exports = {
  code150
}