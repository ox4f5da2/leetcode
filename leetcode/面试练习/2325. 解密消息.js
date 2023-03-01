const code2325 = `
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */

function decodeMessage(key, message) {
  const set = [...new Set(key.replace(/\s*/g, ''))];
  const map = new Map();
  let start = 97, result = [];
  for (let i = 0, len = set.length; i < len; i++, start++) {
    map.set(set[i], String.fromCharCode(start));
  }
  for (let i = 0, len = message.length; i < len; i++) {
    const char = message[i];
    result[i] = char === ' ' ? ' ' : map.get(char);
  }
  return result.join('');
};

console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));
`

module.exports = {
  code2325
}