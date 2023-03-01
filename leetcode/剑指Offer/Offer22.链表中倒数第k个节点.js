const codeOffer22 = `
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

import { LinkedListHelper } from '@karl_fang/data-structure';
let head = new LinkedListHelper([1, 2, 3, 4, 5]).getNthNode();

function ListNode(val, next) {
  this.val = val;
  this.next = next ?? null;
}

function getKthFromEnd(head, k) {
  let newHead = new ListNode("head", head), fast = newHead, slow = newHead;
  while (k) {
    fast = fast.next;
    k--;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

console.log(getKthFromEnd(head, 5)); 
`

module.exports = {
  codeOffer22
}