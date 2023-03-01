const codeOffer7 = `
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function buildTree(preorder, inorder) {
  if (!preorder.length) return null;
  else if (preorder.length === 1) return new TreeNode(preorder[0]);
  let rootIdx = inorder.indexOf(preorder[0]);
  return new TreeNode(
    preorder[0],
    buildTree(preorder.slice(1, 1 + rootIdx), inorder.slice(0, rootIdx)),
    buildTree(preorder.slice(1 + rootIdx), inorder.slice(rootIdx + 1))
  );
};

const root = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
BinaryTreeHelper.LogMyTree(root);
`

module.exports = {
  codeOffer7
}