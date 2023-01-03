const codeOffer38 = `
/**
 * @param {string} s
 * @return {string[]}
 */

function permutation(s) {
  let letter = s.split(""), len = s.length, result = [], path = "", idx = [];
  recursion();
  return result;
  function recursion() {
    if (path.length === len) {
      !result.includes(path) && result.push(path);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (idx.includes(i)) continue;
      path += letter[i];
      idx.push(i);
      recursion();
      path = path.slice(0, -1);
      idx.pop();
    }
  }
};

console.log(permutation("abc"));
`

module.exports = {
  codeOffer38
}