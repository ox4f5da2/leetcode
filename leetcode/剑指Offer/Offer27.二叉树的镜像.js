const codeOffer27 = `
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';
let root = new BinaryTreeHelper([4, 2, 7, 1, 3, 6, 9]).getRoot();

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left ?? null;
  this.right = right ?? null;
}

function mirrorTree(root) {
  if (root === null) return null;
  let node = new TreeNode(root.val);
  node.left = mirrorTree(root.right);
  node.right = mirrorTree(root.left);
  return node;
};

BinaryTreeHelper.LogMyTree(mirrorTree(root));
`

module.exports = {
  codeOffer27
}