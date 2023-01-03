const code1302 = `
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
 * @return {number}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';
let root = new BinaryTreeHelper([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, null, null, 8]).getRoot();

function deepestLeavesSum(root) {
  let node = [];
  recursion(root, 0)
  return node.at(-1).reduce((pre, curr) => pre += curr, 0);
  function recursion(root, depth) {
    if (root === null) return;
    !node[depth] && (node[depth] = []);
    node[depth].push(root.val);
    recursion(root.left, depth + 1);
    recursion(root.right, depth + 1);
  }
};

console.log(deepestLeavesSum(root));
`

module.exports = {
  code1302
}