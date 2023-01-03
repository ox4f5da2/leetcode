const code739 = `
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

function getStackTop(stack) {
  return stack[stack.length - 1];
}

function dailyTemperatures(temperatures) {
  let stack = [], result = [];
  temperatures.forEach((item, index) => {
    if (!stack.length) {
      stack.push({ index, val: item });
    }
    else {
      let top = getStackTop(stack);
      while (stack.length && item > top.val) {
        result[top.index] = index - top.index;
        stack.pop();
        top = getStackTop(stack);
      }
      stack.push({ index, val: item });
    }
  })
  stack.forEach(item => result[item.index] = 0);
  return result;
};

console.log(dailyTemperatures([30, 60, 90]));
`

module.exports = {
  code739
}