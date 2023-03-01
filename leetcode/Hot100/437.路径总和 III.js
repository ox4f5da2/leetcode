const code437 = `
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
 * @return {number}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';
let bst = new BinaryTreeHelper([1, -2, -3, 1, 3, -2, null, -1]);
let root = bst.getRoot();

function backTracking(map, val) {
  map.set(val, map.get(val) - 1);
}

function pathSum(root, targetSum) {
  let map = new Map().set(0, 1), result = 0;
  recursion(root,  0);
  return result;
  function recursion(root, prefix) {
    if (root === null) return null;
    prefix += root.val;
    result += map.get(prefix - targetSum) ?? 0;
    let temp = map.get(prefix);
    map.set(prefix, (temp ?? 0) + 1);
    temp = recursion(root.left, prefix);
    // 如果返回的不是空节点需要把前缀和减掉
    temp !== null && backTracking(map, prefix + temp);
    temp = recursion(root.right, prefix);
    // 如果返回的不是空节点需要把前缀和减掉
    temp !== null && backTracking(map, prefix + temp);
    return root.val;
  }
};

console.log(pathSum(root, -3));
`

module.exports = {
  code437
}