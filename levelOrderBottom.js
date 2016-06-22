/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {

    var results = [];
    var q = [root, null];
    var level = [];

    if(!root) {
        return [];
    }

    while(q.length > 0) {

        var current = q.shift();

        if(current) {
            level.push(current.val);

            if(current.left) {
                q.push(current.left);
            }

            if(current.right) {
                q.push(current.right);
            }
        }
        else {
            results.push(level);
            level = [];
            if(q.length > 0) {
                q.push(null);
            }

        }
    }

    return results.reverse();
};
