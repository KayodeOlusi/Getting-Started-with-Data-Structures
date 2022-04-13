//   How to use bubble sorting in javascript to sort an array

//   Define your array
var num = [1, 3, 4, 2, 5, 7, 6, 10, 9, 8];

const bubbleSort = (num) => {
	let swapped = false;
	// Using do while loop
	do {
		swapped = false;
		// we set our base case(swapped) to false until the array is sorted
		for (let i = 0; i < num.length; i++) {
			// loop through the array
			if (num[i] > num[i + 1]) {
				// if the first value is greater than the next value
				[num[i], num[i + 1]] = [num[i + 1], num[i]];
				// swap the position the two values using destructuring
				swapped = true;
				// set swapped to true
				console.log(num);
			}
		}
	} while (swapped); // As long as swapped is false it keeps sorting till its true

	return num;
};

//   Using insertion sort to sort an array
const insertionSort = (num) => {
	var empty = [];

	for (let i = 1; i < num.length; i++) {
		for (let j = 0; j < i; j++) {
			if (num[i] < num[j]) {
				const spliced = num.splice(i, 1);
				num.splice(j, 0, spliced[0]);
				console.log(num);
			}
		}
	}

	empty.push(num);
	return empty;
};

//  const insertionSort = (nums) => {
//  	for (let i = 1; i < nums.length; i++) {
//  		let numToInsert = nums[i];
//  		let j;

//  		for (j = i - 1; nums[j] > numToInsert && j >= 0; j--) {
//  			nums[j + 1] = nums[j];
//  		}

//  		nums[j + 1] = numToInsert;
//  	}

//  	return nums;
//  };

//    Using Quick Sort
const quickSort = (nums) => {
	if (nums.length <= 2) {
		return nums;
	}

	const left = [];
	const right = [];
	const pivot = nums[nums.length - 1];

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] < pivot) {
			left.push(nums[i]);
		} else {
			right.push(nums[i]);
		}
	}

	const sortedLeft = quickSort(left);
	const sortedRight = quickSort(right);

	return sortedLeft.concat(pivot, sortedRight);
};

//    Merge Sort
const mergeSort = (nums) => {
	if (nums.length < 2) {
		return nums;
	}

	const length = nums.length;
	const middle = Math.floor(length / 2);
	const left = nums.slice(0, middle);
	const right = nums.slice(middle);
	const sortedLeft = mergeSort(left);
	const sortedRight = mergeSort(right);

	return merge(sortedLeft, sortedRight);
};

const merge = (left, right) => {
	const result = [];

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	result.concat(left, right);
};

bubbleSort(num);
insertionSort(num);
console.log(quickSort([10, 2, 4, 3, 1, 6, 5, 8, 7, 9]));
console.log(quickSort([10, 2]));
console.log(mergeSort([10, 2, 4, 3, 1, 6, 5, 8, 7, 9]));
