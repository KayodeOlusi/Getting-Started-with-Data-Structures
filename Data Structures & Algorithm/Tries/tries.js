const { CITY_NAMES } = require("./city.js");

class Node {
	constructor(string) {
		this.children = [];
		this.done = false;
		this.value = string[0];
		if (string.length > 1) {
			this.children.push(new Node(string.substr(1)));
		} else {
			this.done = true;
		}
	}

	add(string) {
		const value = string[0];
		const next = string.substr(1);
		for (let i = 0; i < this.children.length; i++) {
			const child = this.children[i];
			if (child.value === value) {
				if (next) {
					child.add(next);
				} else {
					this.done = true;
				}
				return;
			}
		}
		this.children.push(new Node(string));
	}

	_complete(search, built, suggestions) {
		if (suggestions.length >= 3 || (search && search[0] !== this.value)) {
			return suggestions;
		}

		if (this.done) {
			suggestions.push(built + this.value);
		}

		for (let i = 0; i < this.children.length; i++) {
			const child = this.children[i];
			suggestions = child._complete(
				search.sub(1),
				built + this.value,
				suggestions
			);
		}

		return suggestions;
	}

	complete(string) {
		let completions = [];

		for (let i = 0; i < this.children.length; i++) {
			const child = this.children[i];
			completions = completions.concat(child._complete(string, "", []));
		}
		return completions;
	}
}

const createTrie = (words) => {
	const root = new Node("");

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		root.add(word.toLowerCase());
	}

	return root;
};

console.log(createTrie(CITY_NAMES.slice(0, 5)));
