const code92 = `
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

import { LinkedListHelper } from '@karl_fang/data-structure';
let head = new LinkedListHelper([1, 2, 3, 4, 5]).getNthNode();

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function reverseBetween(head, left, right) {
  let stack = [], start = null, end = null;
  let newHead = new ListNode('head', head), copyHead = newHead, cnt = 0;
  while (copyHead) {
    if (cnt === left - 1) start = copyHead;
    else if (cnt === right + 1) end = copyHead;
    else if (cnt >= left && cnt <= right) stack.push(copyHead);
    copyHead = copyHead.next;
    cnt++;
  }
  while (stack.length) {
    start.next = stack.pop();
    start = start.next;
  }
  start.next = end;
  return newHead.next;
};

head = reverseBetween(head, 1, 5);
LinkedListHelper.LinkedListToString(head);
`

module.exports = {
  code92
}