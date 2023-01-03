const code22 = `
/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  let path = "", result = [], parenthesis = ["(", ")"];
  backTracking(0, 0);
  return result;
  function backTracking(leftParenthesisNum, rightParenthesisNum){
    if (path.length === n * 2) {
      if(path[0] === "(" && leftParenthesisNum === n) result.push(path);
      return;
    }
    if (leftParenthesisNum > n) return;
    for (let i = 0; i <= (leftParenthesisNum > rightParenthesisNum ? 1 : 0 ); i++){
      path += parenthesis[i];
      if (i === 0) leftParenthesisNum++;
      else rightParenthesisNum++;
      backTracking(leftParenthesisNum, rightParenthesisNum);
      if (path.slice(-1) === "(") leftParenthesisNum--;
      else rightParenthesisNum--;
      path = path.slice(0, -1);
    }
  }
};

function generateParenthesis(n) {
  const result = [], component = ['(', ')'];
  let left = 0, right = 0, path = '';
  backTracking();
  return result;

  function backTracking() {
    if (path.length === 2 * n) {
      if (left === n && right === n) {
        result.push(path);
      }
      return;
    }

    for (let i = 0; i < 2; i++) {
      if (left < right) continue;
      path += component[i];
      i === 0 ? left++ : right++;
      backTracking();
      path = path.slice(0, -1);
      i === 0 ? left-- : right--;
    }
  }
};

console.log(generateParenthesis(4));
`

module.exports = {
  code22
}