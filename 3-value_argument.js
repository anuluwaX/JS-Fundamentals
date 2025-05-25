// Write a script that prints the first argument passed to it:

// If no arguments are passed to the script, print “No argument”
// You must use console.log(...) to print all output
// You are not allowed to use var
// You are not allowed to use length
const {argv} = require('node:process');
if (argv[2] === undefined) {
  console.log('No argument');
}
else {
  console.log(argv[2]);
}
// The first element in argv is the path to the node executable
// The second element is the path to the script being executed
// The third element is the first argument passed to the script, if any
// The fourth element is the second argument passed to the script, if any
// and so on...
