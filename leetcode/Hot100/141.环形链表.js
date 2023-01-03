const code141 = `
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
import LinkedList from "../utils/linkedList.js";
let arr = [1,2,3,4];
let llist = new LinkedList(arr,2);
let head = llist.head;
llist.toString();

方法1:
function hasCycle(head) {
  let [fast, slow] = [head, head];
  do {
    fast = fast?.next?.next;
    slow = slow?.next
  } while (fast !== slow);
  if (fast === undefined || slow === undefined) return false;
  fast = head;
  while (fast !== slow) {
    fast = fast?.next;
    slow = slow?.next;
  }
  return fast === undefined ? false : true;
};

方法2:
function hasCycle(head) {
  let map = new Map(), currentNode = head;
  while (currentNode) {
    let temp = map.get(currentNode);
    if (!temp) map.set(currentNode, true);
    else return true;
    currentNode = currentNode.next;
  }
  return false;
};
console.log(hasCycle(head));
`

module.exports = {
  code141
}