const breadthFirstTraverse = (queue, array) => {
	if (!queue.length) return array;

	const node = queue.shift();
	array.push(node.value);
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
