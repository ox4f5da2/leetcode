const code51 = `
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while (num = await readline()) {
        const str = (await readline()).split(" ");
        let id = Number.parseInt(await readline());
        const head = genLinkList(str);
        let fast = head,
            slow = head;
        while (id) {
            fast = fast.next;
            id--;
        }
        while (fast) {
            fast = fast.next;
            slow = slow.next;
        }
        console.log(slow.val);
    }

    function genLinkList(array) {
        let head = new ListNode("head"),
            currentNode = head;
        array.forEach((item) => {
            const tempNode = new ListNode(item);
            head.next = tempNode;
            head = tempNode;
        });
        return currentNode.next;
    }

    function ListNode(val, next) {
        this.val = val;
        this.next = next ?? null;
    }
})();
`;

module.exports = {
  code51
}
