const code112 = `
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
 * @param {number} targetSum
 * @return {boolean}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';
let root = new BinaryTreeHelper([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1]).getRoot();

function hasPathSum(root, targetSum) {
  let result = false, sum = 0;
  recursion(root);
  return result;
  function recursion(root) {
    if (root === null || result) return 0;
    sum += root.val;
    if (root.left === null && root.right === null) {
      result = sum === targetSum;
      return root.val;
    }
    let leftVal = recursion(root.left);
    sum -= leftVal;
    let rightVal = recursion(root.right);
    sum -= rightVal;
    return root.val;
  }
};

console.log(hasPathSum(root, 22));
`

module.exports = {
  code112
}