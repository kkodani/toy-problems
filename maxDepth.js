/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // var deepest = 0;
    // var recurse = function(node, depth) {
    //     if(depth > deepest) {
    //         deepest = depth;
    //     }
    //     if(node.left) {
    //         recurse(node.left, depth + 1);
    //     }
    //     if(node.right) {
    //         recurse(node.right, depth + 1);
    //     }
    // };

    // if(!root) {
    //     return 0;
    // }

    // recurse(root, 1);
    // return deepest;

    // if(!root) {
    //     return 0;
    // }
    // if(!root.left && !root.right) {
    //     return 1;
    // }


    // return Math.max((1 + maxDepth(root.left)), (1 + maxDepth(root.right)))

    if(!root) {
        return 0;
    }
    var q = [root, null];
    var depth = 1;
    while(q.length > 0) {
        var node = q.shift();
        if(node) {
            if(node.left) {
                q.push(node.left);
            }
            if(node.right) {
                q.push(node.right);
            }
        }
        else if(q.length !== 0) {
            q.push(null);
            depth++;
        }

    }
    return depth;
};
