const code105 = `
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
import { BinaryTreeHelper } from '@karl_fang/data-structure';

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

// 题目中解释道: preorder 和 inorder 均无重复元素
function buildTree(preorder, inorder) {
  if (preorder.length === 0) return null;
  if (preorder.length === 1) return new TreeNode(preorder[0]);
  let rootIdx = inorder.indexOf(preorder[0]);
  return new TreeNode(
    preorder[0],
    buildTree(preorder.slice(1, rootIdx + 1), inorder.slice(0, rootIdx)),
    buildTree(preorder.slice(rootIdx + 1), inorder.slice(rootIdx + 1))
  );
};

let root = buildTree([3, 9, 4, 20, 15, 7], [9, 4, 3, 15, 20, 7]);
BinaryTreeHelper.LogMyTree(root);
`

module.exports = {
  code105
}