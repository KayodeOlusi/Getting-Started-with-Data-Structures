// //Practical ways to use recursion in javascript

// // //to create a factorial function
// function factorials(num) {
//   if (num < 2) {
//     //our base case
//     return 1;
//   } else {
//     return num * factorials(num - 1);
//     //the function repeats itself until the num argument gets to 1 value
//   }
// }

// factorials(1); // 1
// factorials(2); // 2
// factorials(3); // 6
// factorials(4); // 24
// factorials(5); // 120

// // to create a fibonacci series function
// var fibonacci_series = function (n) {
//   if (n === 1) {
//     return [0, 1];
//     //our base case
//   } else {
//     var fb = fibonacci_series(n - 1);
//     //we store the returned values of our callback function into the variable fb
//     fb.push(fb[fb.length - 1] + fb[fb.length - 2]);
//     //we add the last value with the second to the last value and push into the array created from our base case  
//     return fb;
//     //fb becomes an array of the first n numbers of a fibonacci series
//   }
// };

// console.log(fibonacci_series(1)); // [0,1] 
// console.log(fibonacci_series(3)); // [0,1,1,2]
// console.log(fibonacci_series(8)); // [0,1,1,2,3,5,8,13,21]

// // to create a combination function
// function combination(n, r) {
//   if (n === r) {
//     return 1;
//     //our base case
//   } else if (n < r) {
//     console.log("Math Error");
//     //if first input is less than second input
//   } else {
//     return (
//       (n * factorials(n - 1)) /
//       (r * factorials(r - 1) * ((n - r) * factorials(n - r - 1)))
//     );
//     //our combination function using recursion
//   }
// }

// //To get the fibonacci of a number
// const fibonacci = ( num ) => {
//   if( num === 1 || num === 2 ) {
//     return 1;
//     //our base case to return 1 if num = 2 or 1
//   } else if( num <= 0 ) {
//     return 0;
//     //our base case to return 0 if num is negative or equal to zero
//   }

//   return fibonacci( num - 1 ) + fibonacci( num - 2 );
//   // the function calls itself until we reach our base case and returns a value 
// }

// console.log(fibonacci(1)) // 1
// console.log(fibonacci(3)) // 2
// console.log(fibonacci(6)) // 8
// console.log(fibonacci(12)) // 144


// console.log(factorials(5)); //120
// console.log(factorials(3)); //6
// console.log(combination(5, 3)); //10
// console.log(combination(3, 4)); //Math Error

const addSum = ( array ) => {
  let sum = 0
  for ( i = 0; i < array.length; i++ ) {
    const current = array[i];
    if ( Array.isArray(current) ) {
      sum += addSum(current)
    }else {
      sum += current
    }
  }
  return sum
}

console.log(addSum([1, [12, 3, 4], 2, [4, 5, 7], 3]))
console.log(addSum([1, [12, 3, 4], 2, [4, 5, 7], 3]))