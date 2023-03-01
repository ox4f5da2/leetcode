const code199 = `
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

import { BinaryTreeHelper } from '@karl_fang/data-structure';
const root = new BinaryTreeHelper([1, 2, 3, 4, 5]).getRoot();

function rightSideView(root) {
  const result = [];
  recursion(root, 0);
  return result;
  function recursion(root, depth) {
    if (root === null) return;
    result[depth] = root.val;
    recursion(root.left, depth + 1);
    recursion(root.right, depth + 1);
  }
};

console.log(rightSideView(root));
`

module.exports = {
  code199
}