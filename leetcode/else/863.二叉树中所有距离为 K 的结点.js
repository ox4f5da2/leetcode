const code863 = `
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';
let root = new BinaryTreeHelper([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]).getRoot();

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left ?? null;
  this.right = right ?? null;
}

function distanceK(root, target, k) {
  if (k === 0) return [target.val];
  let map = new Map(), result = [];
  let currentNode = null, beforeParentVal = -1;
  recursion(root, null);
  while (currentNode && k >= 0) {
    let temp = currentNode.val;
    get(currentNode, 0, k);
    currentNode = map.get(temp);
    beforeParentVal = temp;
    k = k - 1;
  }
  return result;
  function recursion(root, parent) {
    if (root === null) return;
    if (root.val === target.val) currentNode = root;
    map.set(root.val, parent);
    recursion(root.left, root);
    recursion(root.right, root);
  }
  function get(root, depth, k) {
    if (root === null || root.val === beforeParentVal) return;
    if (depth === k) {
      result.push(root.val);
      return;
    }
    get(root.left, depth + 1, k);
    get(root.right, depth + 1, k);
  }
};

let node = new TreeNode(7);
console.log(distanceK(root, node, 3));
`

module.exports = {
  code863
}