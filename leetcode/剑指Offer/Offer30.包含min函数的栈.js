const codeOffer30 = `
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.storage = [];
  this.list = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.storage.push(x);
  let top = this.list.at(-1);
  top === undefined || x < top ? this.list.push(x) : this.list.push(top);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.storage.pop();
  this.list.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.storage.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.list.at(-1);
};

var obj = new MinStack()
obj.push(0);
obj.push(1);
obj.push(0);
console.log(obj.min());
obj.pop();
console.log(obj.min());
`

module.exports = {
  codeOffer30
}