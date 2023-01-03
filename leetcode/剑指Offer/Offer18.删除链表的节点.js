const codeOffer18 = `
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

import { LinkedListHelper } from '@karl_fang/data-structure';
let head1 = new LinkedListHelper([4, 5, 1, 9]).getNthNode();

function ListNode(val, next) {
  this.val = val;
  this.next = next === undefined ? null : next;
}

function deleteNode(head, val) {
  let newHead = new ListNode("head", head), curr = newHead;
  while (curr) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
      break;
    }
    curr = curr.next;
  }
  return newHead.next;
};

head1 = deleteNode(head1, 9);
LinkedListHelper.LinkedListToString(head1);
`

module.exports = {
  codeOffer18
}