const code165 = `
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

function compareVersion(version1, version2) {
  const ver1 = version1.split("."), ver2 = version2.split(".");
  const len1 = ver1.length, len2 = ver2.length;
  let p1 = 0, p2 = 0;
  while (p1 < len1 || p2 < len2) {
    const v1 = Number.parseInt(ver1[p1] ?? 0),
      v2 = Number.parseInt(ver2[p2] ?? 0);
    if (v1 < v2) return -1;
    else if (v1 > v2) return 1;
    p1++;
    p2++;
  }
  return 0;
};

console.log(compareVersion("1.01.0", "1.001"));
console.log(compareVersion("1.01.0.3", "1.001"));
console.log(compareVersion("1.0.0", "1.0"));
console.log(compareVersion("0.1", "1.1"));
`

module.exports = {
  code165
}