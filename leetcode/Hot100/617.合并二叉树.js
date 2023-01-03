const code617 = `
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';
let bst1 = new BinaryTreeHelper([1, 3, 2, 5, null, null, null]);
let bst2 = new BinaryTreeHelper([2, 1, 3, null, 4, null, 7]);

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function mergeTrees(root1, root2) {
  if (root1 === null || root2 === null) {
    return root1 || root2;
  }
  root1.val = root1.val + root2.val;
  root1.left = mergeTrees(root1?.left ?? null, root2?.left ?? null);
  root1.right = mergeTrees(root1?.right ?? null, root2?.right ?? null);
  return root1;
};

mergeTrees(bst1.root, bst2.root)
bst1.logTree();
`

module.exports = {
  code617
}