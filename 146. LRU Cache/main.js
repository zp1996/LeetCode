/**
 * @constructor
 */
var LRUCache = function(capacity) {
	this.capacity = capacity;
	this.size = 0;
	this.map = {};
	this.head = null;
	this.tail = null;
};
/**
 * @constructor Node
 */
function Node(key, value) {
	this.key = key;
	this.value = value;
	this.prev = null;
	this.after = null;
};
/**
 * @param {Node} other
 * @returns {boolean}
 */
Node.prototype.equal = function(other) {
	return other.key === this.key &&
		other.value === this.value &&
		other.prev === this.prev &&
		other.after === this.after;
};
/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
	if (this.map[key]) {
		return this.getNode(key).value;    
	} else {
		return -1;
	}
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
	var node = this.getNode(key);
	if (!node) {
		if (this.size === this.capacity) {
			this.shiftNode();
		}
		node = new Node(key, value);
		this.map[key] = node;
		if (this.tail) {
			this.tail.after = node;
			node.prev = this.tail;
		} else {
			this.head = node;
		}
		this.tail = node;
		this.size++;
	}	
	node.value = value;    
};

LRUCache.prototype.shiftNode = function() {
	var node = this.head;
	if (node) {
		if (this.head.equal(this.tail)) {
			this.head = this.tail = null;
		}
		this.head && (this.head = this.head.after);
		this.head && (this.head.prev = null);
		delete this.map[node.key];
		this.size--;
	}  
};
LRUCache.prototype.getNode = function(key) {
	var node = this.map[key];
	if (!node) return null;
	if (node.equal(this.tail)) return node;
	if (node.after) {
		if (node.equal(this.head)) {
			this.head = node.after;
		}
		node.after.prev = node.prev;
	}
	if (node.prev) {
		node.prev.after = node.after;
	}
	node.after = null
	node.prev = this.tail;
	if (this.tail) {
		this.tail.after = node;
	}
	this.tail = node;
	return node;
};