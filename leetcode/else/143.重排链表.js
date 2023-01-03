const code143 = `
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

 import { LinkedListHelper } from '@karl_fang/data-structure';
 let head = new LinkedListHelper([1, 2, 3, 4,5]).getNthNode();
 
 function ListNode(val, next) {
   this.val = (val === undefined ? 0 : val)
   this.next = (next === undefined ? null : next)
 }
 
 var reorderList = function (head) {
   let newHead = new ListNode("head"), currentNode = head;
   const queue = [], copyHead = newHead;
   while (currentNode) {
     queue.push(currentNode);
     currentNode = currentNode.next;
   }
   while (queue.length) {
     let first = queue.shift(), last = queue.pop() ?? null;
     newHead.next = first;
     first.next = last;
     newHead = last;
   }
   newHead && (newHead.next = null);
   return copyHead.next;
 };
 
 LinkedListHelper.LinkedListToString(reorderList(head));
`

module.exports = {
  code143
}