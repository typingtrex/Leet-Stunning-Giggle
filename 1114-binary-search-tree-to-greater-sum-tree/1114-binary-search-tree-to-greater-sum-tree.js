/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    if (root.right === null && root.left === null) {
        return root
    }

    // base case for recursion is 
    // if currentNode.right is a leaf node

    // lessons on TREES -----------------
    /*
        1. Think RECURSION*** 98%
        2. Think creating a new recursive function and main func is a wrapper.*** 98%
            a) what do I want to do at the root node?
            b) what do I want to do at the key nodes?
            
        3. Make your base case: if node is equal to null

        ----------------
        coding the solution: 
            1. I want a more global variable = sum that persists after each recursion
            2. I want to keep going to the right
        
    */
    // let currNode = root; 
   
    const transformToGST = (currNode, sum) => {
        // base case
        if (currNode === null) {
            return sum
        }
        
        sum = transformToGST(currNode.right, sum)
        
        // console.log("before", currNode.val)

        sum += currNode.val // updates the total sum including currNode
        currNode.val = sum // updates currNode value
        // console.log(currNode.val)

        sum = transformToGST(currNode.left, sum)
        return sum
    }

    transformToGST(root, 0)
    return root
};