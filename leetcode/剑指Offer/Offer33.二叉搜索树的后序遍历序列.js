const codeOffer33 = `
/**
 * @param {number[]} postorder
 * @return {boolean}
 */

function findSplitIdx(array, last) {
  for (let i = 0, len = array.length; i < len; i++) {
    if (array[i] > last) return i;
  }
  return array.length - 1;
}

function verifyPostorder(postorder) {
  return recursion(postorder);
  function recursion(postorder, rootVal, dir) {
    if (postorder.length <= 1) return true;
    let last = postorder.at(-1), idx = findSplitIdx(postorder, last);
    let left = recursion(postorder.slice(0, idx), last, 'left');
    let right = recursion(postorder.slice(idx, -1), last, 'right');
    let mid = true;
    switch (dir) {
      case 'left': mid = postorder.every(item => item < rootVal); break;
      case 'right': mid = postorder.every(item => item > rootVal); break;
    }
    return left && right && mid;
  }
};

console.log(verifyPostorder([4, 6, 12, 8, 16, 14, 10]));
`

module.exports = {
  codeOffer33
}