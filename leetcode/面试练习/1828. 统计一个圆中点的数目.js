const code1828 = `
/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */

function square(n) {
  return Math.pow(n, 2);
}

function calcDistance(p1, center) {
  return square(p1[0] - center[0]) + square(p1[1] - center[1]) <= square(center[2]);
}

function countPoints(points, queries) {
  const result = new Array(queries.length).fill(0);
  for (let i = 0, len1 = queries.length; i < len1; i++) {
    for (let j = 0, len2 = points.length; j < len2; j++) {
      const num = result[i];
      result[i] = calcDistance(points[j], queries[i]) ? num + 1 : num;
    }
  }
  return result;
};

console.log(countPoints([[1, 3], [3, 3], [5, 3], [2, 2]], [[2, 3, 1], [4, 3, 1], [1, 1, 2]]));
`

module.exports = {
  code1828
}