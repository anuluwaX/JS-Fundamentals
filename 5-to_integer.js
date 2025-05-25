// Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:

// If the argument can’t be converted to an integer, print “Not a number”
// You must use console.log(...) to print all output
// You are not allowed to use var
// You are not allowed to use try/catch
const { argv } = require('node:process');
if (argv[2] === undefined || isNaN(argv[2])) {
  console.log('Not a number');
}
else {
  console.log(`My number: ${parseInt(argv[2])}`);
}
// The first element in argv is the path to the node executable
// The second element is the path to the script being executed
// The third element is the first argument passed to the script, if any
// The fourth element is the second argument passed to the script, if any
// and so on...
// isNaN() checks if the value is NaN (Not a Number)
// parseInt() converts the string to an integer
// Note: parseInt() will return NaN if the string cannot be converted to an integer
// Note: The script will print "Not a number" if the first argument is not provided or cannot be converted to an integer
// Note: The script will print "My number: <integer>" if the first argument can be converted to an integer
// Note: The script does not use var, try/catch, or length
// Note: The script uses console.log() to print all output
