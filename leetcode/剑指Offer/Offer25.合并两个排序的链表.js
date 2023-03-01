const codeOffer25 = `
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

import { LinkedListHelper } from '@karl_fang/data-structure';
let l1 = new LinkedListHelper([1, 2, 4]).getNthNode();
let l2 = new LinkedListHelper([1, 3, 4, 5, 6]).getNthNode();

function ListNode(val, next) {
  this.val = val;
  this.next = next ?? null;
}

function mergeTwoLists(l1, l2) {
  let p1 = l1, p2 = l2, head = new ListNode("head"), curr = head;
  while (p1 && p2) {
    if (p1.val <= p2.val) {
      curr.next = p1;
      p1 = p1.next;
    }
    else {
      curr.next = p2;
      p2 = p2.next;
    }
    curr = curr.next;
  }
  curr.next = p1 ?? p2;
  return head.next;
};

LinkedListHelper.LinkedListToString(mergeTwoLists(l1, l2));
`

module.exports = {
  codeOffer25
}