//  Depth First Tree Traversals

const preOrderTraverse = (node, array) => {
	if (!node) return array;
	array.push(node.value);
	array = preOrderTraverse(node.left, array);
	array = preOrderTraverse(node.right, array);
	return array;
};

const innerOrderTraverse = (node, array) => {
	if (!node) return array;
	array = preOrderTraverse(node.left, array);
	array.push(node.value);
	array = preOrderTraverse(node.right, array);
	return array;
};

const postOrderTraverse = (node, array) => {
	if (!node) return array;
	array = preOrderTraverse(node.left, array);
	array = preOrderTraverse(node.right, array);
	array.push(node.value);
	return array;
};
