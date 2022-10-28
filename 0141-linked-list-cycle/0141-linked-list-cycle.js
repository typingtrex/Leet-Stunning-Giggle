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
var hasCycle = function(head) {
    let hashset = new Set();
    
    let currNode = head;
    while(currNode) {
        // console.log("WHAT is hashset, ", hashset)
        if(hashset.has(currNode)) {
            return true;
        } else {
            hashset.add(currNode);
        }
        currNode = currNode.next;
    }
    
    return false;
};