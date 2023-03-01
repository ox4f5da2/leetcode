const code148 = `
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 import { LinkedListHelper } from '@karl_fang/data-structure';
let list1 = new LinkedListHelper([4, 2, 1, 3]); // 普通链表

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function insertNode(node1, node2) {
  let temp = node2.next;
  if (temp) {
    node2.next = node2.next.next;
    temp.next = node1.next;
    node1.next = temp;
  }
}

function sortList(head) {
  const tempHead = new ListNode("head", head);
  let beforeCurr = tempHead;
  let curr = head;
  while (curr) {
    let beforeTempCurr = tempHead;
    let tempCurr = tempHead.next;
    // console.log("before: ", LinkedList.linkedListToString(tempHead), "curr:", curr.val, "tempCurr:", beforeTempCurr.val);
    while (tempCurr !== curr) {
      if (curr.val > tempCurr.val) {
        tempCurr = tempCurr.next;
        beforeTempCurr = beforeTempCurr.next;
      }
      else {
        curr = curr.next;
        insertNode(beforeTempCurr, beforeCurr);
        break;
      }
    }
    if (tempCurr === curr) {
      curr = curr.next;
      beforeCurr = beforeCurr.next;
    }
    // console.log(LinkedList.linkedListToString(tempHead));
  }
  return tempHead.next;
};

let afterSort = sortList(list1.getNthNode(1));
console.log(LinkedListHelper.LinkedListToString(afterSort));
`

module.exports = {
  code148
}