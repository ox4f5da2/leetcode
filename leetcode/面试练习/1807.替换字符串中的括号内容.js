const code1807 = `
/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */

function evaluate(s, knowledge) {
  const map = new Map(knowledge);
  return s.replace(/(\(.*?\))/g, word => map.get(word.slice(1, -1)) ?? '?');
};

console.log(evaluate("(name)is(age)yearsold", [["a","b"]]));
`

module.exports = {
  code1807
}