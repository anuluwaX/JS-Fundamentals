// Write a script that prints a square

// The first argument is the size of the square
// If the first argument can’t be converted to an integer, print “Missing size”
// You must use the character X to print the square
// You must use console.log(...) to print all output
// You are not allowed to use var
// You must use a loop (while, for, etc.)
const { argv } = require('node:process');
if (argv[2] === undefined || isNaN(argv[2])) {
  console.log('Missing size');
}
else {
  const size = parseInt(argv[2]);
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
      row += 'X';
    }
    console.log(row);
  }
}
// Note: The script will print "Missing size" if the first argument is not provided or cannot be converted to an integer
// Note: The script will print a square of size X using the character 'X'