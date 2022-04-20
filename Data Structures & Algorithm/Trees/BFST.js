// Breadth-First-Search-Traverse

const node = {
	value: 8,
	left: {
		value: 5,
		left: {
			value: 2,
			left: {
				value: 1,
			},
			right: {
				value: 4,
			},
		},
		right: {
			value: 7,
		},
	},
	right: {
		value: 10,
		left: {
			value: 12,
		},
		right: {
			value: 14,
		},
	},
};

// Recursive Method
const breadthFirstTraverse = (queue, array) => {
	// If no element in queue, return the array
	if (!queue.length) return array;

	// Set node to first element in queue
	const node = queue.shift();
	// Push the value
	array.push(node.value);
	// If we have left node, add to t
	if (node.left) queue.push(node.left);
	if (node.right) queue.push(node.right);
	return breadthFirstTraverse(queue, array);
};

const breadthFirstTraverse2 = (queue, array) => {
	while (queue.length) {
		const node = queue.shift();
		array.push(node.value);
		if (node.left) queue.push(node.left);
		if (node.right) queue.push(node.right);
	}

	return array;
};
