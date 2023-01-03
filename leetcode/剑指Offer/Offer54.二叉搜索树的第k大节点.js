const codeOffer54 = `
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

function kthLargest(root, k) {
  let list = [];
  recursion(root);
  return list[k - 1];
  function recursion(root) {
    if (root === null || list.length === k) return;
    recursion(root.right);
    list.push(root.val);
    recursion(root.left);
  }
};
`

module.exports = {
  codeOffer54
}