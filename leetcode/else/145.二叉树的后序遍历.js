const code145 = `
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const result = [];
  recursion(root);
  return result;
  function recursion(root) {
    if (root === null) return;
    recursion(root.left);
    recursion(root.right);
    result.push(root.val);
  }
};
`

module.exports = {
  code145
}