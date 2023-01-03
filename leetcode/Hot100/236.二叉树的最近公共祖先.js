const code236 = `
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
let bst = new BinaryTreeHelper([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
let root = bst.getRoot();

// 题干：所有 Node.val 互不相同
// 注意：p 和 q 是节点
function lowestCommonAncestor(root, p, q) {
  let result = null, temp = [p.val, q.val];
  recursion(root);
  return result;
  function recursion(root) {
    if (root === null) return false;
    let ifInLeft = recursion(root.left);
    let ifInRight = recursion(root.right);
    if (ifInLeft && ifInRight || temp.includes(root.val) && (ifInLeft || ifInRight)) {
      result = root;
      return false;
    }
    return temp.includes(root.val) || (ifInLeft || ifInRight);
  }
};

console.log(lowestCommonAncestor(root, 5, 1));
`

module.exports = {
  code236
}