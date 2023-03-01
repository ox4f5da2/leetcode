const codeOffer6 = `
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

import { LinkedListHelper } from '@karl_fang/data-structure';
let head = new LinkedListHelper([1, 3, 2]).getNthNode();

function swap(array, a, b) {
  array[a] = array[a] ^ array[b];
  array[b] = array[a] ^ array[b];
  array[a] = array[a] ^ array[b];
}

function reverseArray(array) {
  let left = 0, right = array.length - 1;
  while (left < right) swap(array, left++, right--);
}

// 反转数组
function reversePrint(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  reverseArray(result)
  return result;
};

// 栈
function reversePrint(head) {
  const stack = [], result = [];
  while (head) {
    stack.push(head.val);
    head = head.next;
  }
  while (stack.length) result.push(stack.pop());
  return result;
};

console.log(reversePrint(head));
`

module.exports = {
  codeOffer6
}