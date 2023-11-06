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

 // ------ my recent solution ----------

var reverseList = function(head) {
    let previousNode = null;
    let currentNode = head; //1

    while (currentNode) {
        nextNode = currentNode.next //2
        currentNode.next = previousNode; // null <- 1
        previousNode = currentNode; // prev = 1
        currentNode = nextNode; // 2
    }
    return previousNode
};


// ------ neetcode solutions -------
// ----- iteratively with 2 pointers -------
// same as mine above 
// Time Complexity O(N)
// Space Complexity O(1)

