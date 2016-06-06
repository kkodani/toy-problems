/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) {
        return root;
    }

    //var inverted = new TreeNode(root.val);
    var recurse = function(node) {
        var temp = node.left;
        node.left = node.right;
        node.right = temp;
        if(node.left) {
            recurse(node.left);
        }
        if(node.right) {
            recurse(node.right);
        }
    };
    recurse(root);
    return root;

};
