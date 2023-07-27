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

    // if ((p.val < current.val && q.val > current.val) || (p.val > current.val && q.val < current.val)) {
    //   return current;
    // }

    // if (p.val === current.val || q.val === current.val) {
    //   return current;
    // }
    
  }
}

/*
var lowestCommonAncestor = function(root, p, q) {
  // console.log(root.val)

    const isLeft = (node) => {
      if (node) {
        if (node.val < root.val) {
            return true;
        } 
        return false;
      }
    }

  if (isLeft(p) && isLeft(q)) {
    console.log("left", root.val, root.left.val)
    return lowestCommonAncestor(root.left)
  } 

  if (isLeft(p) === false && isLeft(q) === false) {
    console.log("right", root.val, root.right.val)
    return lowestCommonAncestor(root.right)
  }
  // base case of node1 and node2 in different directions
  return root

};
*/