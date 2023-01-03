const code1656 = `
class OrderedStream {
  /**
   * @param {number} n
   */
  constructor(n) {
    this.storage = new Array(n + 1);
    this.ptr = 1;
  }
  /** 
   * @param {number} idKey 
   * @param {string} value
   * @return {string[]}
   */
  insert(idKey, value) {
    this.storage[idKey] = value;
    let start = this.ptr;
    while (this.storage[this.ptr]) {
      this.ptr++;
    }
    return this.storage.slice(start, this.ptr);
  };
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

var os = new OrderedStream(5);
console.log(os.insert(3, "ccccc"));
console.log(os.insert(1, "aaaaa"));
console.log(os.insert(2, "bbbbb"));
console.log(os.insert(5, "eeeee"));
console.log(os.insert(4, "ddddd"));
`

module.exports = {
  code1656
}