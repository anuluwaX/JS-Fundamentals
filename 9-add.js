// Write a script that prints the addition of 2 integers

// The first argument is the first integer
// The second argument is the second integer
// You have to define a function with this prototype: function add(a, b)
// You must use console.log(...) to print all output
// You are not allowed to use var
const { argv } = require('node:process');
function add(a, b) {
  return a + b;
}
if (argv[2] === undefined || argv[3] === undefined || isNaN(argv[2]) || isNaN(argv[3])) {
  console.log('NaN');
}
else {
  const firstInt = parseInt(argv[2]);
  const secondInt = parseInt(argv[3]);
  console.log(add(firstInt, secondInt));
}
// Note: The script will print "NaN" if the first or second argument is not provided or cannot be converted to an integer
// Note: The script will print the sum of the two integers if both arguments can be converted to integers