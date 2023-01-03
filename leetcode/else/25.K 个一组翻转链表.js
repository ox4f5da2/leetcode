const code25 = `
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

import { LinkedListHelper } from '@karl_fang/data-structure';
let head = new LinkedListHelper([1, 2, 3, 4, 5]).getNthNode();

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var reverseKGroup = function (head, k) {
  let storage = [];
  let currentNode = head, newHead = new ListNode("head"), copyHead = newHead;
  while (currentNode) {
    storage.push(currentNode);
    currentNode = currentNode.next;
    if (storage.length === k) {
      while (storage.length) {
        newHead.next = storage.pop();
        newHead = newHead.next;
      }
      newHead.next = null;
      storage.length = 0;
    }
  }
  storage.length && (newHead.next = storage[0]);
  return copyHead.next;
};

let obj = reverseKGroup(head, 3);
LinkedListHelper.LinkedListToString(obj);
`

module.exports = {
  code25
}