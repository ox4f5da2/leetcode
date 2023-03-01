const codeOffer32_1 = `
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';
let root = new BinaryTreeHelper([4, 2, 7, 1, 3, 6, 9]).getRoot();

function levelOrder(root) {
  let map = new Map(), result = [];
  recursion(root, 0);
  [...map.values()].forEach(item => result.push(...item))
  return result;
  function recursion(root, depth) {
    if (root === null) return;
    const temp = map.get(depth);
    if (!temp) map.set(depth, [root.val]);
    else temp.push(root.val);
    recursion(root.left, depth + 1);
    recursion(root.right, depth + 1);
  }
};

console.log(levelOrder(root));
`

module.exports = {
  codeOffer32_1
}