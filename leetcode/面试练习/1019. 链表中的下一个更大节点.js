const code1019 = `
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
import { LinkedListHelper } from '@karl_fang/data-structure';
const list = new LinkedListHelper([2, 7, 4, 3, 5]).getNthNode();

function nextLargerNodes(head) {
  let node1 = head;
  const result = [];
  while (node1) {
    let node2 = node1.next;
    let val = node1.val, flag = false;
    while (node2) {
      if (node2.val > val) {
        flag = true;
        break;
      }
      node2 = node2.next;
    }
    result.push(flag ? node2.val : 0);
    node1 = node1.next;
  }
  return result;
};

console.log(nextLargerNodes(list));
`

module.exports = {
  code1019
}