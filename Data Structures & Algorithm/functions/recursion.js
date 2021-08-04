//Practical ways to use recursion in javascript

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

factorials(1); // 1
factorials(2); // 2
factorials(3); // 6
factorials(4); // 24
factorials(5); // 120

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

console.log(fibonacci_series(1)); // [0,1] 
console.log(fibonacci_series(3)); // [0,1,1,2]
console.log(fibonacci_series(8)); // [0,1,1,2,3,5,8,13,21]

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

console.log(factorials(5)); //120
console.log(factorials(3)); //6
console.log(combination(5, 3)); //10
console.log(combination(3, 4)); //Math Error
