// Using Binary Search to search for a value
const binarySearch = (id, array) => {
	let min = 0;
	let max = array.length - 1;
	let element;
	let index;

	while (min <= max) {
		index = Math.floor((min + max) / 2);
		element = array[index];

		if (element.id < id) {
			min = index + 1;
		} else if (element.id > id) {
			min = index - 1;
		} else {
			return element;
		}
	}
	return void 0;
};

console.log(
	binarySearch(23, [
		{ id: 5, name: "Zubs" },
		{ id: 1, name: "Kayode" },
		{ id: 14, name: "Ayobami" },
		{ id: 24, name: "Ekekiel" },
		{ id: 23, name: "Uyo" },
		{ id: 80, name: "Ada" },
	])
);

//Using Linear Search to look for a value
const linearSearch = (id, array) => {
	for (let i = 0; i < array.length; i++) {
		if (id === array[i].id) {
			return array[i];
		}
	}
	return void 0;
};

console.log(
	linearSearch(23, [
		{ id: 1, name: "Kayode" },
		{ id: 14, name: "Ayobami" },
		{ id: 5, name: "Zubs" },
		{ id: 23, name: "Uyo" },
		{ id: 24, name: "Ekekiel" },
		{ id: 80, name: "Ada" },
	])
);
