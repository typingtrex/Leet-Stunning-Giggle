/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// brute force -- ON^2 with headA loop with headB inner loop
// hashmap the values and see if it's correct. Then say how many times to loop 

var getIntersectionNode = function(headA, headB) {
    let nodesA = new Set();
    let currA = headA;
    let currB = headB;
    // let count = 1;
 
    while(currA) {
        // console.log(currA, currA.val)
        nodesA.add(currA);
        currA = currA.next;
      
    }
    
    while(currB) {
        // console.log(Set, currB.val)
        
        if (nodesA.has(currB)) return currB;
        currB = currB.next;
    }
    
    return null;
};