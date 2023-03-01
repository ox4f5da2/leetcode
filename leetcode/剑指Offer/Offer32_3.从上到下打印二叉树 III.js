const codeOffer32_3 = `
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';
let root = new BinaryTreeHelper([4, 2, 7, 1, 3, 6, 9]).getRoot();

function levelOrder(root) {
  let result = [];
  recursion(root, 0);
  return result;
  function recursion(root, depth) {
    if (root === null) return;
    const temp = result[depth];
    if (!temp) result[depth] = [root.val];
    else depth % 2 ? temp.unshift(root.val) : temp.push(root.val);
    recursion(root.left, depth + 1);
    recursion(root.right, depth + 1);
  }
};

console.log(levelOrder(root));
`

module.exports = {
  codeOffer32_3
}