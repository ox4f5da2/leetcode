const code144 = `
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';
const root = new BinaryTreeHelper([1, null, 2, null, null, 3, null]).getRoot();

function preorderTraversal(root) {
  const result = [];
  recursion(root);
  return result;
  function recursion(root) {
    if (root === null) return;
    result.push(root.val);
    recursion(root.left);
    recursion(root.right);
  }
};

console.log(preorderTraversal(root));
`

module.exports = {
  code144
}