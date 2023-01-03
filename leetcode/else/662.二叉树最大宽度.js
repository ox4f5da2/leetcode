const code662 = `
/**
 * @param {TreeNode} root
 * @return {number}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';
let root = new BinaryTreeHelper([0, null, 0, null, null, 1, 2, null, null, null, null, 3, 4, 5, 6]).getRoot();

function widthOfBinaryTree(root) {
  let queue = [[root, 1n]], result = 1;
  while (queue.length) {
    let temp = queue.at(-1)[1] - queue[0][1] + 1n;
    result = temp > result ? temp : result;
    for (let i = 0, len = queue.length; i < len; i++) {
      let node = queue.shift();
      if (node !== null) {
        node[0]?.left && queue.push([node[0].left, node[1] * 2n]);
        node[0]?.right && queue.push([node[0].right, node[1] * 2n + 1n]);
      }
    }
    
  }
  return result;
};

console.log(widthOfBinaryTree(root));
`

module.exports = {
  code662
}