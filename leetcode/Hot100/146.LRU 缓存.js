const code146 = `
function Node(key, val, pre, next) {
  this.key = key ?? null;
  this.val = val ?? null;
  this.pre = pre ?? null;
  this.next = next ?? null;
}

function DoubleLinkedList() {
  this.head = new Node("head", "head");
  this.tail = new Node("tail", "tail");
  this.init();
}

DoubleLinkedList.prototype.init = function () {
  this.head.next = this.tail;
  this.tail.pre = this.head;
}

DoubleLinkedList.prototype.deleteLastElement = function () {
  const last = this.tail.pre;
  this.tail.pre = last.pre;
  last.pre.next = last.next;
  return last.key;
}

DoubleLinkedList.prototype.addFirstElement = function (node) {
  const oldFirst = this.head.next;
  node.pre = this.head;
  node.next = oldFirst;
  this.head.next = node;
  oldFirst.pre = node;
}

DoubleLinkedList.prototype.getHead = function () {
  return this.head;
}

DoubleLinkedList.moveToFirst = function (node, head) {
  const preNode = node.pre, nextNode = node.next, afterHead = head.next;
  if (afterHead === node) return;
  preNode.next = nextNode;
  nextNode.pre = preNode;
  afterHead.pre = node;
  head.next = node;
  node.pre = head;
  node.next = afterHead;
}

DoubleLinkedList.prototype.log = function (direction = "b2e") {
  if (direction === "b2e") {
    let currentNode = this.head.next, str = "head";
    while (currentNode) {
      str += " --> " + currentNode.val;
      currentNode = currentNode.next;
    }
    console.log("from begin to end:", str);
  } else if (direction === "e2b") {
    let currentNode = this.tail.pre, str = "tail";
    while (currentNode) {
      str += " --> " + currentNode.val;
      currentNode = currentNode.pre;
    }
    console.log("from end to begin:", str);
  }
}

// const dll = new DoubleLinkedList();
// dll.addFirstElement(new Node(1, 1));
// DoubleLinkedList.moveToFirst(dll.tail.pre, dll.getHead());
// dll.log();
// dll.log("e2b");
// dll.addFirstElement(new Node(2, 2));
// DoubleLinkedList.moveToFirst(dll.tail.pre, dll.getHead());
// dll.log();
// dll.log("e2b");
// dll.addFirstElement(new Node(3, 3));
// DoubleLinkedList.moveToFirst(dll.tail.pre, dll.getHead());
// dll.log();
// dll.log("e2b");
// dll.addFirstElement(new Node(4, 4));
// DoubleLinkedList.moveToFirst(dll.tail.pre, dll.getHead());
// dll.log();
// dll.log("e2b");
// dll.log();
// dll.log("e2b");
// dll.deleteLastElement();
// dll.log();
// dll.log("e2b");
// DoubleLinkedList.moveToFirst(dll.tail.pre, dll.getHead());
// dll.log();
// dll.log("e2b");

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.map = new Map();
  this.dll = new DoubleLinkedList();
  this.head = this.dll.getHead();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let res = this.map.get(key);
  if (!res) return -1;
  DoubleLinkedList.moveToFirst(res, this.head);
  return res.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let res = this.map.get(key);
  if (!res) {
    let node = new Node(key, value);
    this.dll.addFirstElement(node);
    this.map.set(key, node);
    this.size++;
    if (this.size > this.capacity) {
      const key = this.dll.deleteLastElement();
      this.map.delete(key);
      this.size--;
    }
  }
  else {
    res.val = value;
    DoubleLinkedList.moveToFirst(res, this.head);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// const lRUCache = new LRUCache(2);
// lRUCache.put(1, 0); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// console.log(lRUCache.get(1));    // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// console.log(lRUCache.get(2));    // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// console.log(lRUCache.get(1));    // 返回 -1 (未找到)
// console.log(lRUCache.get(3));    // 返回 3
// console.log(lRUCache.get(4));    // 返回 4

// const lRUCache = new LRUCache(1);
// lRUCache.put(2, 1);
// console.log(lRUCache.get(2));
// lRUCache.put(3, 2);
// console.log(lRUCache.get(2));
// console.log(lRUCache.get(3));

const lRUCache = new LRUCache(2);
lRUCache.put(2, 1);
lRUCache.put(1, 1);
lRUCache.put(2, 3);
lRUCache.put(4, 1);
console.log(lRUCache.get(1));
console.log(lRUCache.get(2));
`
module.exports = {
  code146
}