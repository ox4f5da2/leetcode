const codeOffer55_1 = `
/**
 * @param {TreeNode} root
 * @return {number}
 */

function maxDepth(root) {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
`

module.exports = {
  codeOffer55_1
}