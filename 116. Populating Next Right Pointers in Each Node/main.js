/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (root) {
        var cache = [];
        cache.push(root);
        while (cache.length) {
            var first = cache.shift(),
                len = cache.length,
                index = 0;
            first.left && cache.push(first.left, first.right);
            while (index++ < len) {
                first.next = cache.shift();
                first = first.next;
                first.left && cache.push(first.left, first.right);
            }
            first.next = null;
        }
    }
};