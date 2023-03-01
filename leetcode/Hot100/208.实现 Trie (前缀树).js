const code208 = `
class Trie {
  constructor() {
    this.node = {};
  }
  /** 
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let curr = this.node;
    for (let char of word) {
      if (!curr[char]) {
        curr[char] = {};
      }
      curr = curr[char];
    }
    curr.ifEnd = true;
  };

  // 辅助函数
  ifExist(prefix) {
    let curr = this.node;
    for (let char of prefix) {
      if (!curr[char]) return null;
      curr = curr[char];
    }
    return curr;
  };

  /** 
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let temp = this.ifExist(word);
    return !!temp && !!temp.ifEnd;
  }

  /** 
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    return !!this.ifExist(prefix);
  };
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();
// trie.insert("apple");
console.log(trie.search("apple"));
// console.log(trie.search("app"));
// console.log(trie.startsWith("app"));
// trie.insert("app");
// console.log(trie.search("app"));
`

module.exports = {
  code208
}