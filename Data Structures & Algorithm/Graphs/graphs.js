const { getUser } = require("./jobs");

const findMostCommonTitle = (myId, degreesOfSeparation) => {
	let queue = [myId];
	const seen = new Set(queue);
	const jobs = {};

	for (let i = 0; i <= degreesOfSeparation; i++) {
		const newQueue = [];
		while (queue.length) {
			const user = getUser(queue.shift());
		}
	}
};
