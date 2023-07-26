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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const queue = [root];
    const averages = [];

    while (queue.length) {
        const levelLength = queue.length;
        let sum = 0;

        for (let i = 0; i < levelLength; i++) {
            const currNode = queue.shift();
            sum += currNode.val

            if (currNode.left) {
                queue.push(currNode.left)
            }

            if (currNode.right) {
                queue.push(currNode.right)
            }
        }
        const average = sum/levelLength;
        averages.push(average);
    }
    return averages
};