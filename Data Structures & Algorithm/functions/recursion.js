//Practical ways to use recursion in javascript

//to create a factorial function
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

var fibonacci_series = function (n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacci_series(5));

function combination(n, r) {
  if (n === r) {
    return 1;
  } else if (n < r) {
    console.log("Math Error");
  } else {
    return (
      (n * factorials(n - 1)) /
      (r * factorials(r - 1) * ((n - r) * factorials(n - r - 1)))
    );
  }
}

console.log(factorials(5));
console.log(factorials(3));
console.log(combination(5, 3));
