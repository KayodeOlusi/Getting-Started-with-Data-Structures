// Binary Search Tree works on a sorted list or array

class Tree {
	constructor() {
		this.root = null;
	}

	add(value) {
		if (this.root === null) {
			// If no root node, set the root node to the value
			this.root = new Node(value);
		} else {
			let current = this.root;
			while (true) {
				if (current.value > value) {
					// If root node is greater than the value, go left
					if (current.left) {
						// If there is a left node, set the current node to the left node
						current = current.left;
					} else {
						// If no left node, set the left node to the new node
						current.left = new Node(value);
						break;
					}
				} else {
					// If root node is less than the value, go right

					if (current.right) {
						// If there is a right node, set the current node to the right node
						current = current.right;
					} else {
						// If no right node, set the right node to the new node
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
