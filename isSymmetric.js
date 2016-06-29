/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) {
        return true;
    }
    if(root.left && root.right && root.left.val !== root.right.val) {
        return false;
    }

    var recurse = function(node1, node2) {
        if (node1 === null && node2 === null) {
            return true;
        }
        if (node1 === null || node2 === null) {
            return false;
        }
        return node1.val === node2.val && recurse(node1.left, node2.right) && recurse(node2.left, node1.right)
    };

    return recurse(root.left, root.right);
};

//can also be done with level order traversal + queue + stack
