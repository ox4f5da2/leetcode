const codeOffer32_2 = `
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function levelOrder(root) {
  let result = [];
  recursion(root, 0);
  return result;
  function recursion(root, depth) {
    if (root === null) return;
    const temp = result[depth];
    if (!temp) result[depth] = [root.val];
    else temp.push(root.val);
    recursion(root.left, depth + 1);
    recursion(root.right, depth + 1);
  }
};
`

module.exports = {
  codeOffer32_2
}