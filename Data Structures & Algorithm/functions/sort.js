//How to use bubble sorting in javascript to sort an array

//Define your array
var num = [1, 3, 4, 2, 5, 7, 6, 10, 9, 8];

const bubbleSort = (num) => {
  //Create an empty array
  var empty = [];
  //Using do while loop
  do {
    //we set our base case(swapped) to false until the array is sorted
    var swapped = false;
    for (let i = 0; i < num.length; i++) {
      //loop through the array
      if (num[i] > num[i + 1]) {
        //if the first value is greater than the next value
        [num[i], num[i + 1]] = [num[i + 1], num[i]];
        //swap the position the two values using destructuring
        var swapped = true;
        //set swapped to tue
        console.log(num);
      }
    }
  } while (swapped); //As long as swapped is false it keeps sorting till its true
  empty.push(num);
  return empty;
  //push the sorted array to the empty array and return the empty array
};

bubbleSort(num);

//Using insertion sort to sort an array
var num = [4, 1, 2, 3, 7, 6, 5, 8, 10, 9];

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

insertionSort(num);
