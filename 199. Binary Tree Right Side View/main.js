/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const res = [];
    if (root && root.hasOwnProperty("left")) {
        const cache = [];
        cache.push(root);
        while (cache.length) {
            const len = cache.length;
            var i = 0, node = null;
            while (i++ < len) {
                node = cache.shift();
                node.left && cache.push(node.left);
                node.right && cache.push(node.right);
            }
            res.push(node.val);
        }
    }
    return res;
};