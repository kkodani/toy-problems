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
var isBalanced = function(root) {

    if(!root) {
        return true;
    }
    var diff = Math.abs(depth(root.left) - depth(root.right));
    if(diff ===  1 || diff === 0) {
        return isBalanced(root.left) && isBalanced(root.right);
    }
    return false;

};

function depth(root) {

    var maxDepth = 0;

    var recurse = function(node, depth) {
        if(depth > maxDepth) {
            maxDepth = depth;
        }
        if(node.left) {
            recurse(node.left, depth+1);
        }
        if(node.right) {
            recurse(node.right, depth+1);
        }
    };

    if(root) {
        recurse(root, 1);
    }
    return maxDepth;
}
