const code1417 = `
/**
 * @param {string} s
 * @return {string}
 */

function getCode(s) {
  return s?.codePointAt();
}

function ifNumber(s) {
  return getCode(s) >= 48 && getCode(s) <= 57;
}

function ifLetter(s) {
  return getCode(s) >= 97 && getCode(s) <= 122;
}

function reformat(s) {
  let stack1 = [], stack2 = [], result = "";
  for (let char of s) {
    if (ifNumber(char)) stack1.push(char);
    else if (ifLetter(char)) stack2.push(char);
  }
  const len1 = stack1.length, len2 = stack2.length;
  if (len1 < len2) {
    [stack1, stack2] = [stack2, stack1];
  }
  while (stack1.length && stack2.length) {
    result += stack1.pop();
    result += stack2.pop();
  }
  if (!stack2.length) {
    if (stack1.length === 1) {
      result += stack1.pop();
      return result;
    }
    else if (stack1.length === 0) {
      return result
    }
  }
  return "";
};

console.log(reformat("a0b1c2"));
`

module.exports = {
  code1417
}