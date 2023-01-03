const code655 = `
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
 * @return {string[][]}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';
let root = new BinaryTreeHelper([1, 2, 3, null, 4]).getRoot();

function calcDepth(root) {
  if (root === null) return 0;
  return Math.max(calcDepth(root.left), calcDepth(root.right)) + 1;
}

function initArray(depth) {
  return [...new Array(depth).keys()].map(() => new Array(2 ** depth - 1).fill(""));
}

function printTree(root) {
  const height = calcDepth(root) - 1;
  const result = initArray(height + 1);
  const temp = (2 ** (height + 1) - 2) >> 1;
  result[0][temp] = "" + root.val;
  recursion(root.left, 0, temp, "left");
  recursion(root.right, 0, temp, "right");
  return result;
  function recursion(root, r, c, pos) {
    if (root === null) return;
    let temp = 2 ** (height - r - 1);
    let x = r + 1, y;
    pos === "left" && (y = c - temp);
    pos === "right" && (y = c + temp);
    result[x][y] = "" + root.val;
    recursion(root.left, x, y, "left");
    recursion(root.right, x, y, "right");
  }
};

console.log(printTree(root));
`

module.exports = {
  code655
}