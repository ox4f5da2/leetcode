const codeOffer68_2 = `
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';
let root = new BinaryTreeHelper([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]).getRoot();

function lowestCommonAncestor(root, p, q) {
  let list = [p.val, q.val], result = null;
  recursion(root);
  return result;
  function recursion(root) {
    if (root === null) return false;
    let left = recursion(root.left);
    let right = recursion(root.right);
    let flag = list.includes(root.val);
    if (!flag && left && right || flag && (left || right)) {
      result = root;
    }
    if (flag && !left && !right) return true;
    return left || right;
  }
};

console.log(lowestCommonAncestor(root, 5, 1));
`

module.exports = {
  codeOffer68_2
}