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
 * @param {number} val
 * @return {TreeNode}
 */
// var searchBST = function(root, val) {
   
//         if(root.val === val) {
//             console.log("inside equal", root)
//             return root 
//         }
    
//         if (val < root.val) {
//             // root = root.left;
            
//             return searchBST(root.left, val);
//         } else {
//             // root = root.right;
//             // console.log(root, "inside else")
//             return searchBST(root.right, val);
//         }    
    
//         // if (val !== root.val && !root.left && !root.right) {
//         //     // console.log(currNode.val, currNode.left, currNode.right)
//         //     return null;
//         // }            
    
    
  
// };

var searchBST = function(root, val) {
    if (root === null) return null;
    if (root.val === val) return root;
    
    if (val < root.val) {
        return searchBST(root.left, val);
    } else if (val > root.val) {
        return searchBST(root.right, val);
    }
};