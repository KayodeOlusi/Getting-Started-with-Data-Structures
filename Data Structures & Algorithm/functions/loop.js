//Some basic ways to iterate/loop through an array

//basic for loop
//create an array
var array = [1, 2, 3, 4, 5];
//loop through the array with for loop
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// 1,2,3,4,5 at different intervals

function addUp(input) {
  //Create a new array
  var answer = [];
  //Loop through the array
  for (var i = 0; i < input.length; i++) {
    //Store the elements of the array in a variable
    var addingUp = input[i];
    //Add the last element of the array to all elements in the array
    var addingDown = input[input.length - 1 - i];
    //Push the returned elements to the empty array
    answer.push(addingUp + addingDown);
  }
  return answer;
}

console.log(addUp([1, 2, 3])); //log out [4,4,4]

// Double iteration over an array
function doubleIterate(input) {
  //Create an empty array
  var answer = [];
  //Create a for loop
  for (var i = 0; i < input.length; i++) {
    //Create a new for loop inside the first for loop
    for (let j = 0; j < input.length; j++) {
      answer.push(input[i], input[j]);
    }
  }
  return answer;
}

console.log(doubleIterate([1, 2, 3])); // log out []
