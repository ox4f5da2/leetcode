const code543 = `
function diameterOfBinaryTree(root) {
  let result = 0;
  recursion(root);
  return result;
  function recursion(root) {
    if (root === null) return 0;
    let left = recursion(root.left), right = recursion(root.right);
    result = Math.max(left + right, result);
    return Math.max(left, right) + 1;
  }
};
`

module.exports = {
  code543
}