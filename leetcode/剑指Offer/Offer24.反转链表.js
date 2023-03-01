const codeOffer24 = `
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

import { LinkedListHelper } from '@karl_fang/data-structure';
let head = new LinkedListHelper([1, 2, 3, 4, 5]).getNthNode();

function ListNode(val, next) {
  this.val = val;
  this.next = next ?? null;
}

function reverseList(head) {
  let newHead = new ListNode("head");
  while (head) {
    let copyNode = head;
    head = head.next;
    copyNode.next = newHead.next;
    newHead.next = copyNode;
  }
  return newHead.next;
};

LinkedListHelper.LinkedListToString(reverseList(head));
`

module.exports = {
  codeOffer24
}