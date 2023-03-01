const code101 = `
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
 * @return {boolean}
 */
import { BinaryTreeHelper } from "@karl_fang/data-structure";
let bst = new BinaryTreeHelper([1, 2, 2, 3, 4, 4, 3]);
let root = bst.getRoot();

function recursion(leftNode, rightNode) {
  if (leftNode === null || rightNode === null) {
    return leftNode === rightNode
  }
  else {
    if (leftNode.val !== rightNode.val) return false;
    return recursion(leftNode.left, rightNode.right)
      && recursion(leftNode.right, rightNode.left);
  }
}

function isSymmetric(root) {
  if (root === null) return true;
  return recursion(root.left, root.right);
};
console.log(isSymmetric(root));
`

module.exports = {
  code101
}