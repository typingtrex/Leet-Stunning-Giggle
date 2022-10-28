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
var middleNode = function(head) {
    let count = 0;
    let currNode = head;
    
    while(currNode) {
        currNode = currNode.next;
        count++
    }
    
    currNode = head;
    let middle = Math.floor(count/2);
    while(middle > 0) {
        currNode = currNode.next;
        middle--
    }
    
    return currNode;
};