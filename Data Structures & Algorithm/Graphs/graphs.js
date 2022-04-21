const { getUser } = require("./jobs");

const findMostCommonTitle = (myId, degreesOfSeparation) => {
	let queue = [myId];
	const seen = new Set(queue);
	const jobs = {};

	for (let i = 0; i <= degreesOfSeparation; i++) {
		const newQueue = [];
		while (queue.length) {
			const user = getUser(queue.shift());

			// queue up next iteration of connections
			for (let j = 0; j < user.connections.length; j++) {
				const connection = user.connections[j];
				if (!seen.has(connection)) {
					newQueue.push(connection);
					seen.add(connection);
				}
			}
			// count the job
			jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1;
		}

		queue = newQueue;
	}

	const jobKeys = Object.keys(jobs);

	// find key with the biggest number
	let biggestNumber = jobs[jobKeys[0]];
	let jobName = jobKeys[0];
	for (let i = 1; i < jobKeys.length; i++) {
		const currentJob = jobKeys[i];
		if (jobs[currentJob] > biggestNumber) {
			jobName = currentJob;
			biggestNumber = jobs[currentJob];
		}
	}

	return jobName;
};

console.log(findMostCommonTitle(10, 2));
