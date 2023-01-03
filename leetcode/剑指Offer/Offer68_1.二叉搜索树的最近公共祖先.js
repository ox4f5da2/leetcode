const codeOffer68_1 = `
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

import { BinaryTreeHelper } from '@karl_fang/data-structure';
let root = new BinaryTreeHelper([6, 2, null]).getRoot();

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left ?? null;
  this.right = right ?? null;
}

function lowestCommonAncestor(root, p, q) {
  let set1 = getParentNodes(root, p);
  let set2 = getParentNodes(root, q);
  let p1 = 0;
  while (set1[p1] && set2[p1] && (set1[p1].val === set2[p1].val)) {
    p1++;
  }
  return set1[p1 - 1];
  function getParentNodes(root, node) {
    let set = new Set(), curr = root, val = node.val;
    do {
      set.add(curr);
      if (curr.val > val) curr = curr.left;
      else if (curr.val < val) curr = curr.right;
    } while (curr.val !== val);
    set.add(curr);
    return [...set];
  }
};

console.log(lowestCommonAncestor(root, new TreeNode(6), new TreeNode(2)));
`

module.exports = {
  codeOffer68_1
}