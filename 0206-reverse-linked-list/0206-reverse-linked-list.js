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

// example:
// 1 <- 2  3 -> null
// null <- 1 <- 2 <- 3

// var reverseList = function(head) {
//     if(head === null || head.next === null) {
//         return head
//     }
//     let prevNode = null;
//     let currNode = head; //1
//     let nextNode = currNode.next; //2
//     while(currNode) {
//         currNode.next = prevNode; // 1 points to null
//         prevNode = currNode; //1
//         currNode = nextNode; //2
//         if(nextNode.next) {
//           nextNode = nextNode.next; //3   
//         }    
//     }
    
//     return prevNode;
    
    
// };

var reverseList = function(head) {
    if(head === null || head.next === null) {
        return head
    }
    let prevNode = null;
    let currNode = head; //1
    let nextNode //2
    while(currNode) {
        nextNode = currNode.next;
        currNode.next = prevNode; // 1 points to null
        prevNode = currNode; //1
        currNode = nextNode; //2
         
    }
    
    return prevNode;
    
    
};