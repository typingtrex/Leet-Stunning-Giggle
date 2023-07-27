/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/*
// iterative solution: 
var lowestCommonAncestor = function(root, p, q) {
  let current = root;
  while (current) {
    if (p.val < current.val && q.val < current.val) {
      current = current.left;
    } else if (p.val > current.val && q.val > current.val) {
      current = current.right;
    } else {
      return current;
    }

 //  

    // if ((p.val < current.val && q.val > current.val) || (p.val > current.val && q.val < current.val)) {
    //   return current;
    // }

    // if (p.val === current.val || q.val === current.val) {
    //   return current;
    // }
    
  }
}

*/


var lowestCommonAncestor = function(root, p, q) {
  // console.log(root.val)

  // compareTo returns negative num if less than, 0 if equal, positive if greater than 
    const compareToRoot = (node) => {
      if (node == null) {
        return 0
      }
      return node.val - root.val
    }
  console.log("p: ", p)
  console.log("q: ", q)
  if (compareToRoot(p) < 0 && compareToRoot(q) < 0) {
    console.log("left", root.val, root.left.val)
    return lowestCommonAncestor(root.left, p, q)
  } 

  if (compareToRoot(p) > 0 && compareToRoot(q) > 0) {
    console.log("right", root.val, root.right.val)
    return lowestCommonAncestor(root.right, p, q)
  }
  // base case of node1 and node2 in different directions
  return root

};
