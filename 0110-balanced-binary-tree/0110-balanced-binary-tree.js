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
 * @return {boolean}
 */
var isBalanced = function(root) {
    // edge cases: 
    // if empty -- true
    if (!root) {
        return true
    }
    // height balanced 


    // distance to deepest node
    const returnHeight = (currNode) => {
        // base case - when at the leaves (both left and right are null)
        if (currNode.left === null && currNode.right === null) {
            return 1
        }
        let leftHeight = 0
        let rightHeight = 0
       
        
        // recursive call: 
        if (currNode.left) {
            leftHeight = returnHeight(currNode.left)
            if (leftHeight === false) {
                return false
            }
        }

        if (currNode.right) {
            rightHeight = returnHeight(currNode.right)
            if (rightHeight === false) {
                return false
            }
        }
        if (Math.abs(leftHeight - rightHeight) >= 2) {
            return false
        }
        return Math.max(leftHeight, rightHeight) + 1
    }

    return returnHeight(root)
    
};