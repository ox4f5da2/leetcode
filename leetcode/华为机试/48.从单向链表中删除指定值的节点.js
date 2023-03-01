const code48 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const str = (await readline()).split(' ');
    const deleteNum = str.pop();
    const list = str.slice(2);
    const headVal  = str[1];
    const head = genLinkList(list, headVal);
    let currentNode = head;
    while(currentNode.next.val !== deleteNum) {
        currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next?.next ?? null;
    currentNode = head.next;
    let resultStr = '';
    while(currentNode) {
        resultStr += \`${currentNode.val} \`;
        currentNode = currentNode.next;
    }
    console.log(resultStr);

    function ListNode(val, next) {
        this.val = val;
        this.next = next ?? null;
    }

    function genLinkList(array, headVal) {
        const first = new ListNode(headVal);
        const head = new ListNode('head', first);
        const map = new Map([['head', head], [headVal, first]]);
        for(let i = 0; i < array.length; i += 2) {
            const nextNode = map.get(array[i + 1]);
            const tempNode = new ListNode(array[i], nextNode.next);
            nextNode.next = tempNode;
            map.set(array[i], tempNode);
        }
        return head;
    }
}()
`;

module.exports = {
  code48
}
