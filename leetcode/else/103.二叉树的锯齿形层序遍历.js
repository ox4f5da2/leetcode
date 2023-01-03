const code103 = `
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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function (root) {
  let queue = [], result = [], depth = 1, flag = false;
  if (root === null) return result;
  queue.push(root);
  result.push([root.val]);
  while (queue.length) {
    for (let i = 0, len = queue.length; i < len; i++) {
      let node = queue.shift(), opt = flag ? "push" : "unshift";
      if (!result[depth] && (node.left || node.right)) {
        result.push([]);
      }
      if (node.left) {
        queue.push(node.left);
        result[depth][opt](node.left.val);
      }
      if (node.right) {
        queue.push(node.right);
        result[depth][opt](node.right.val);
      }
    }
    depth++;
    flag = !flag;
  }
  return result;
};
`

module.exports = {
  code103
}