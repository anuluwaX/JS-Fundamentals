// Write a script that prints x times “C is fun”

// Where x is the first argument of the script
// If the first argument can’t be converted to an integer, print “Missing number of occurrences”
// You must use console.log(...) to print all output
// You are not allowed to use var
// You can use only two console.log
// You must use a loop (while, for, etc.)
const { argv } = require('node:process');
if (argv[2] === undefined || isNaN(argv[2])) {
  console.log('Missing number of occurrences');
}
else {
  const x = parseInt(argv[2]);
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
// Note: The script will print "Missing number of occurrences" if the first argument is not provided or cannot be converted to an integer
// Note: The script will print "C is fun" x times if the first argument can be converted to an integer