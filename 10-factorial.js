// Write a script that computes and prints a factorial

// The first argument is integer (argument can be cast as integer) used for computing the factorial
// Factorial of NaN is 1
// You must do it recursively
// You must use a function
// You must use console.log(...) to print all output
// You are not allowed to use var
const { argv } = require('node:process');
function factorial(n) {
  if (n < 0 || isNaN(n)) {
    return 1;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
if (argv[2] === undefined || isNaN(argv[2])) {
  console.log(1);
}
else {
  const num = parseInt(argv[2]);
  console.log(factorial(num));
}
// }
// Note: The script will print 1 if the first argument is not provided or cannot be converted to an integer
// Note: The script will compute and print the factorial of the integer provided as the first argument
// Note: The script uses recursion to compute the factorial 
// Note: The script uses a function to compute the factorial
