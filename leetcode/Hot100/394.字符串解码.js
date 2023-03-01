const code394 = `
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

// 0 -> 48; 9 -> 57; a -> 97; z -> 122
function decodeString(s) {
  let stack = [], result = "", firstNumber = true;
  for (let i = 0, len = s.length; i < len; i++) {
    const char = s[i];
    if (ifLetter(char)) {
      if (firstNumber) result += char;
      else stack.push(char);
    }
    else if (ifNumber(char)) {
      stack.push(char);
      firstNumber = false;
    }
    else if (char === "[") {
      if (ifNumber(s[i + 1])) {
        stack.push("");
      } 
    }
    else if (char === "]") {
      console.log(stack);
      let subStr = "", subNum = "", popStr = "";
      do {
        subStr = popStr + subStr;
        popStr = stack.pop();
      }while(ifLetter(popStr))
      do {
        subNum = popStr + subNum;
        popStr = stack.pop();
      } while (ifNumber(popStr))
      popStr && stack.push(popStr);
      const tempRes = subStr.repeat(Number.parseInt(subNum));
      if (stack.length) stack.push(tempRes);
      else result += tempRes;
    }
  }
  if (stack.length) stack.forEach(char => result += char);
  return result;
}

console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"));
`

module.exports = {
  code394
}