const code88 = `
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1, m, nums2, n) {
  let p1 = 0, p2 = 0, copynums1 = nums1.slice();
  nums1.length = 0;
  while (p1 < m && p2 < n) {
    const temp1 = copynums1[p1], temp2 = nums2[p2];
    if (temp1 <= temp2) {
      nums1.push(temp1);
      p1++;
    }
    if(temp1 > temp2) {
      nums1.push(temp2);
      p2++;
    }
  }
  p1 < m ? nums1.push(...copynums1.slice(p1, m)) : nums1.push(...nums2.slice(p2, n));
  return nums1;
};

console.log(merge([1, 2, 3, 7, 0, 0, 0], 4, [2, 5, 6], 3));
`

module.exports = {
  code88
}