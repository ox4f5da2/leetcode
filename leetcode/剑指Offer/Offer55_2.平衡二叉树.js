const codeOffer55_2 = `
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
  let [depth, flag] = recursion(root);
  return flag;
  function recursion(root) {
    if (root === null) return [0, true];
    let [left, flag1] = recursion(root.left);
    let [right, flag2] = recursion(root.right);
    return [Math.max(left, right) + 1, flag1 && flag2 && Math.abs(left - right) <= 1];
  }
};
`

module.exports = {
  codeOffer55_2
}