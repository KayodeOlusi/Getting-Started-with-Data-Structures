class LindedList {
	constructor() {
		// Instantiate our variables
		this.head = null; // The first value
		this.tail = null; // The link to the next value
		this.length = 0; // Size of list
	}

	push(value) {
		const node = new Node(value);
		this.length++; // Increment the length
		if (!this.head) {
			this.head = node; // Set the head to the node if no head
		} else {
			this.tail.next = node; //Set the previous node link to the node added
		}
		this.tail = node; // assign the link to the node
	}

	pop() {
		return this.delete(this.length - 1);
	}

	_find(index) {
		if (index >= this.length) return null; //If index is greater than length of list, return null
		let current = this.head; // Assign current to the first value
		for (let i = 0; i < index; i++) {
			// Loop through the list
			current = current.next; // Set the current value to the next node link
		}
		return current; // Return the next node
	}

	get(index) {
		const node = this._find(index);
		if (!node) return void 0;
		return node.value;
	}

	delete(index) {
		if (index === 0) {
			const head = this.head; // Assign the first value to the head
			if (head) {
				this.head = this.next; // Assign the head to the next node link
			} else {
				this.head = null;
				this.tail = null;
			}
			this.length--;
			return head.value;
		}

		const node = this._find(index - 1);
		const excise = node.next;
		if (!excise) return null;
		node.next = excise.next;
		if (!node.next) this.tail = node.next;
		this.length--;
		return excise.value;
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
