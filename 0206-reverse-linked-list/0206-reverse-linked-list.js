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
var reverseList = function(head) {
    let previousNode = null;
    let currentNode = head; //1
    let nextNode;
    while (currentNode) {
        nextNode = currentNode.next //2
        currentNode.next = previousNode; // null <- 1
        previousNode = currentNode; // prev = 1
        currentNode = nextNode; // 2
    }
    return previousNode
};