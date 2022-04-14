// //How arrays work under the hood in Javascript

class ArrayList {
	constructor() {
		this.array = {};
		this.length = 0;
	}

	push(value) {
		this.array[this.length] = value; // Set the value in the index of the array to the value needed
		this.length++; // Increment the length to accomodate a new value
	}

	pop() {
		const response = this.array[this.length - 1]; // Store the last item in array in a variable
		delete this.array[this.length - 1]; // Delete the item
		this.length--; // Decrement the length of array
		return response; // Return the item
	}

	get(index) {
		return this.array[index]; // Return the item in the given index
	}

	delete(index) {
		const response = this.array[index]; // Store the item to be deleted from array
		// for (let i = index; i < this.array.length; i++) {
		//     this.array[i] = this.array[i + 1]
		// }
		// delete this.data(this.length - 1);
		// this.length--;
		this._collapseTo(index); // Call the collapseTo method
		return response; // Return the deleted item
	}

	_collapseTo(index) {
		// Loop though the array and assign the current item to the next item
		for (let i = index; i < this.array.length; i++) {
			this.array[i] = this.array[i + 1];
		}
		delete this.data(this.length - 1); // Delete the last item which is a duplicate of the one before
		this.length--; // Decrement the length
	}
}
