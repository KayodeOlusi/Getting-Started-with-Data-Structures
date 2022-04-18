//  Depth First Tree Traversals

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

const preOrderTraverse = (node, array) => {
	if (!node) return array;
	array.push(node.value);
	array = preOrderTraverse(node.left, array);
	array = preOrderTraverse(node.right, array);
	return array;
};

const innerOrderTraverse = (node, array) => {
	if (!node) return array;
	array = innerOrderTraverse(node.left, array);
	array.push(node.value);
	array = innerOrderTraverse(node.right, array);
	return array;
};

const postOrderTraverse = (node, array) => {
	if (!node) return array;
	array = postOrderTraverse(node.left, array);
	array = postOrderTraverse(node.right, array);
	array.push(node.value);
	return array;
};

// console.log(preOrderTraverse(node, []));
// console.log(innerOrderTraverse(node, []));
console.log(postOrderTraverse(node, []));
