const logMaze = require("./logMaze");
const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

const findShortestPathLength = (maze, [xA, yA], [xB, yB]) => {
	const visited = maze.map((row, y) =>
		row.map((origin, x) => ({
			closed: origin === 1,
			length: 0,
			openedBy: NO_ONE,
			x,
			y,
		}))
	);
	visited[yA][xA].openedBy = BY_A;
	visited[yB][xB].openedBy = BY_B;
	logMaze(visited);

	let aQueue = [visited[yA][xA]];
	let bQueue = [visited[yB][xB]];
	let iteration = 0;

	// if one runs out, there's no path
	while (aQueue.length && bQueue.length) {
		iteration++;
		const aNeighbors = aQueue.reduce(
			(acc, neighbor) => acc.concat(getNeighbors(visited, neighbor.x, neighbor.y)),
			[]
		);
		aQueue = [];
		for (let i = 0; i < aNeighbors.length; i++) {
			const neighbor = aNeighbors[i];
			if (neighbor.openedBy === BY_B) {
				return neighbor.length + iteration;
			} else if (neighbor.openedBy === NO_ONE) {
				neighbor.length = iteration;
				neighbor.openedBy = BY_A;
				aQueue.push(neighbor);
			}
		}

		const bNeighbors = bQueue.reduce(
			(acc, neighbor) => acc.concat(getNeighbors(visited, neighbor.x, neighbor.y)),
			[]
		);
		bQueue = [];
		for (let i = 0; i < bNeighbors.length; i++) {
			const neighbor = bNeighbors[i];
			if (neighbor.openedBy === BY_A) {
				return neighbor.length + iteration;
			} else if (neighbor.openedBy === NO_ONE) {
				neighbor.length = iteration;
				neighbor.openedBy = BY_B;
				bQueue.push(neighbor);
			}
		}
		logMaze(visited);
	}
	return -1;
};

const getNeighbors = (visited, x, y) => {
	const neighbors = [];

	if (y - 1 >= 0 && !visited[y - 1][x].closed) {
		// left
		neighbors.push(visited[y - 1][x]);
	}

	if (y + 1 < visited[0].length && !visited[y + 1][x].closed) {
		// right
		neighbors.push(visited[y + 1][x]);
	}

	if (x - 1 >= 0 && !visited[y][x - 1].closed) {
		// up
		neighbors.push(visited[y][x - 1]);
	}

	if (x + 1 < visited.length && !visited[y][x + 1].closed) {
		// down
		neighbors.push(visited[y][x + 1]);
	}

	return neighbors;
};
