const code1669 = `
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */

import { LinkedListHelper } from '@karl_fang/data-structure';
const list1 = new LinkedListHelper([0, 1, 2, 3, 4, 5]).getNthNode();
const list2 = new LinkedListHelper([1000000, 1000001, 1000002]).getNthNode();

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function mergeInBetween(list1, a, b, list2) {
  const head = new ListNode('head', list1);
  let cnt = -1, currentNode = head, start = null, end = null;
  while (currentNode) {
    if (cnt + 1 === a) start = currentNode;
    else if (cnt === b) {
      end = currentNode;
      break;
    }
    currentNode = currentNode.next;
    cnt++;
  }
  start.next = list2;
  currentNode = list2;
  while (currentNode.next) currentNode = currentNode.next;
  currentNode.next = end.next;
  return head.next;
};

LinkedListHelper.LinkedListToString(mergeInBetween(list1, 3, 4, list2));
`

module.exports = {
  code1669
}