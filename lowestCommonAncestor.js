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
var lowestCommonAncestor = function(root, p, q) {
    var getAncestors = function(root, target) {
        if(!root) {
            return false;
        }
        if(root === target) {
            return [root];
        }
        else {
            var lpath = getAncestors(root.left, target);
            var rpath = getAncestors(root.right, target);
            if(lpath) {
                return [root].concat(lpath);
            }
            if(rpath) {
                return [root].concat(rpath);
            }
            return false;
        }
    };

    var ppath = getAncestors(root, p);
    var qpath = getAncestors(root, q);

    if(ppath && qpath) {
        for(var i = ppath.length-1; i >= 0; i--) {
            if(qpath.includes(ppath[i])) {
                return ppath[i];
            }
        }
    }

    return null;
};
