const codeOffer34 = `
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';
let root = new BinaryTreeHelper([5, 4, 8, 11, null, 7, 4]).getRoot();

function calcPath(array) {
  return array.reduce((pre, curr) => pre += curr, 0);
}

function ifhasChild(root) {
  return !!root?.left || !!root?.right;
}

function pathSum(root, target) {
  if (root === null) return [];
  let result = [], path = [];
  recursion(root);
  return result;
  function recursion(root) {
    if (root === null) return;
    path.push(root.val);
    if (!ifhasChild(root)) {
      calcPath(path) === target && result.push([...path]);
      return;
    }
    recursion(root.left);
    root.left !== null && path.pop();
    recursion(root.right);
    root.right !== null && path.pop();
  }
};


console.log(pathSum(root, 20));
`

module.exports = {
  codeOffer34
}