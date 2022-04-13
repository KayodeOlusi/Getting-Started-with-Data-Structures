//Practical ways to use recursion in javascript

// Looping with recursion

const recursiveLoop = (max, current) => {
	if (current > max) return;
	console.log(current);
	return recursiveLoop(max, current + 1);
};

// //to create a factorial function
function factorials(num) {
	if (num < 2) {
		//our base case
		return 1;
	} else {
		return num * factorials(num - 1);
		//the function repeats itself until the num argument gets to 1 value
	}
}

// to create a fibonacci series function
var fibonacci_series = function (n) {
	if (n === 1) {
		return [0, 1];
		//our base case
	} else {
		var fb = fibonacci_series(n - 1);
		//we store the returned values of our callback function into the variable fb
		fb.push(fb[fb.length - 1] + fb[fb.length - 2]);
		//we add the last value with the second to the last value and push into the array created from our base case
		return fb;
		//fb becomes an array of the first n numbers of a fibonacci series
	}
};

// to create a combination function
function combination(n, r) {
	if (n === r) {
		return 1;
		//our base case
	} else if (n < r) {
		console.log("Math Error");
		//if first input is less than second input
	} else {
		return (
			(n * factorials(n - 1)) /
			(r * factorials(r - 1) * ((n - r) * factorials(n - r - 1)))
		);
		//our combination function using recursion
	}
}

//To get the fibonacci of a number
const fibonacci = (num) => {
	if (num === 1 || num === 2) {
		return 1;
		//our base case to return 1 if num = 2 or 1
	} else if (num <= 0) {
		return 0;
		//our base case to return 0 if num is negative or equal to zero
	}

	return fibonacci(num - 1) + fibonacci(num - 2);
	// the function calls itself until we reach our base case and returns a value
};

// Using Recursion to add numbers in an array
const addSum = (array) => {
	let sum = 0; // our base caee
	for (i = 0; i < array.length; i++) {
		const current = array[i]; // we make the first element in thr array a variable
		if (Array.isArray(current)) {
			sum += addSum(current); // if the element is an array, we call the function to add the elements in the array
		} else {
			sum += current; // here we add the elements together and keep track of the sum variable defined earlier
		}
	}
	return sum; // we return sum
};

// factorials(1); // 1
// factorials(2); // 2
// factorials(3); // 6
// factorials(4); // 24
// factorials(5); // 120
// console.log(combination(5, 3)); //10
// console.log(combination(3, 4)); //Math Error
// console.log(fibonacci(1)) // 1
// console.log(fibonacci(3)) // 2
// console.log(fibonacci(6)) // 8
// console.log(fibonacci(12)) // 144
// console.log(fibonacci_series(1)); // [0,1]
// console.log(fibonacci_series(3)); // [0,1,1,2]
// console.log(fibonacci_series(8)); // [0,1,1,2,3,5,8,13,21]
// console.log(addSum([1, 2, [13, 4], [3, 8], 19, 23, [4, 7] ]))

console.log(recursiveLoop(10, 1));
