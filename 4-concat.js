// Write a script that prints two arguments passed to it, in the following format: “ is ”

// You must use console.log(...) to print all output
// You are not allowed to use var
const {argv} = require('node:process');
if (argv[2] === undefined || argv[3] === undefined) {
  console.log(`${argv[2]} is ${argv[3]}`);
}
else {
  console.log(`${argv[2]} is ${argv[3]}`);
}
// }
// The first element in argv is the path to the node executable
// The second element is the path to the script being executed
// The third element is the first argument passed to the script, if any
// The fourth element is the second argument passed to the script, if any