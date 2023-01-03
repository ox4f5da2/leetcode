const code1592 = `
/**
 * @param {string} text
 * @return {string}
 */

function reorderSpaces(text) {
  let spaceNum = text.match(/\s/g)?.length ?? 0;
  let word = text.match(/\b[a-z]+\b/g);
  let len = word.length;
  if (len === 1) return word[0] + " ".repeat(spaceNum);
  let everyWordSpace = Math.floor(spaceNum / (len - 1));
  let lastwordSpace = spaceNum % (len - 1);
  return word.map((item, index) => {
    if (index === len - 1) return item + " ".repeat(lastwordSpace);
    return item + " ".repeat(everyWordSpace);
  }).join("");
};

console.log(reorderSpaces("  hello"));
`

module.exports = {
  code1592
}