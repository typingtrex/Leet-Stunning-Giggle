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
var swapPairs = function(head) {
    // edge case of empty list or only 1 node in linked list
    if (!head || !head.next) {
        return head;
    }

    // // do first swap to have a previous???
    let prev = new ListNode(0, head);

    let currNode = head; // 1
    let swap = head.next; // 2
    let nextNode = swap.next; // 3

    head = swap; // head = 2
    // 1 -> 4 -> 3 -> 5
    while (currNode) {
        if (swap === null) {
            return head;
        }

        currNode.next = nextNode; // 1 -> 3
        swap.next = currNode; // 2 -> 1
        prev.next = swap; // 0 -> 2 

        prev = currNode; // prev == 1
        currNode = nextNode; // curr == 3
        currNode ? swap = currNode.next : swap = null; // swap == 4
        swap ? nextNode = swap.next : nextNode = null; // nextNode == 5
    }

    return head;
};