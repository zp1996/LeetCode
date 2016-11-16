/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
	if (m === n || m > n) return head;
	var temp = head, prev, after, node,
		index = 1;
	while (temp !== null) {
		if (index === m - 1) {
			prev = temp;
		} else if (index === m) {
			node = temp;
		} else if (index === n) {
			after = temp.next;
		}
		index++;
		temp = temp.next;
	}
	while (m <= n) {
		const t = node;
		node = node.next;
		t.next = after;
		after = t;
		m++;
	}
	prev ? (prev.next = after) : (head = after);
	return head;
};