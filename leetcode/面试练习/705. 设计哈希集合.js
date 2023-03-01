const code705 = `
var MyHashSet = function () {
  this.index = 0;
  this.set = [];
  this.indexMap = {}
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (this.indexMap[key] === undefined) {
    this.set[this.index] = key;
    this.indexMap[key] = this.index;
    this.index++;
  }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const idx = this.indexMap[key];
  if (idx !== undefined) {
    this.set[this.index] = undefined;
    delete this.indexMap[key];
  }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.indexMap[key] !== undefined;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
const myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
console.log(myHashSet.contains(1)); // 返回 True
console.log(myHashSet.contains(3)); // 返回 False ，（未找到）
myHashSet.add(2);      // set = [1, 2]
console.log(myHashSet.contains(2)); // 返回 True
myHashSet.remove(2);   // set = [1]
console.log(myHashSet.contains(2)); // 返回 False ，（已移除）
`

module.exports = {
  code705
}