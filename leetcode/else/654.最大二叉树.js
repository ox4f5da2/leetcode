const code654 = `
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function findMax(array) {
  let idx = -1, max = Number.MIN_SAFE_INTEGER;
  array.forEach((item, index) => {
    if (item > max) {
      max = item;
      idx = index;
    }
  });
  return {
    idx,
    max
  }
}

function constructMaximumBinaryTree(nums) {
  if (!nums.length) return null;
  const { idx, max } = findMax(nums);
  let node = new TreeNode(max);
  node.left = constructMaximumBinaryTree(nums.slice(0, idx));
  node.right = constructMaximumBinaryTree(nums.slice(idx + 1));
  return node;
};

const root = constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]);
BinaryTreeHelper.LogMyTree(root);
`

module.exports = {
  code654
}