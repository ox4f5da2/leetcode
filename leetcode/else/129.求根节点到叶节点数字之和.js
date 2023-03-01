const code129 = `
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
const root = new BinaryTreeHelper([1, 2, 3]).getRoot();

function sumNumbers(root) {
  let result = 0, path = [];
  recursion(root);
  return result;
  function recursion(root) {
    if (root === null) return false;
    path.push(root.val);
    if (root.left === null && root.right === null) {
      result += Number.parseInt(path.join(''));
      return true;
    }
    let left = recursion(root.left);
    left && path.pop();
    let right = recursion(root.right);
    right && path.pop();
    return true;
  }
};

console.log(sumNumbers(root));
`

module.exports = {
  code129
}