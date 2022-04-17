// Binary Search Tree works on a sorted list or array

class Tree {
	constructor() {
		this.root = null;
	}

	add(value) {
		if (this.root === null) {
			this.root = new Node(value);
		} else {
			let current = this.root;
			while (true) {
				if (current.value > value) {
					// go left

					if (current.left) {
						current = current.left;
					} else {
						current.left = new Node(value);
						break;
					}
				} else {
					// go right

					if (current.right) {
						current = current.right;
					} else {
						current.right = new Node(value);
						break;
					}
				}
			}
		}
		return this;
	}

	toObject() {
		return this.root;
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
