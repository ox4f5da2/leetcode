const codeOffer28 = `
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';
let root = new BinaryTreeHelper([1, 2, 2, null, 3, null, 3]).getRoot();

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left ?? null;
  this.right = right ?? null;
}

function isSymmetric(root) {
  if (root === null) return true;
  return recursion(root.left, root.right);
  function recursion(left, right) {
    if (left === null && right === null) return true;
    if ((!left || !right) || left.val !== right.val) return false;
    return recursion(left.left, right.right) && recursion(left.right, right.left);
  }
};

console.log(isSymmetric(root));
`

module.exports = {
  codeOffer28
}