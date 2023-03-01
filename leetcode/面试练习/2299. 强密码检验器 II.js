const code2299 = `
/**
 * @param {string} password
 * @return {boolean}
 */

function strongPasswordCheckerII(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#$%^&*()+])(?!.*([\w\-!@#$%^&*()+])\1).{8,}/.test(password);
};

console.log(strongPasswordCheckerII("1aB!"));
`

module.exports = {
  code2299
}