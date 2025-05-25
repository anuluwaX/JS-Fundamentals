// Write a script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop

// The first line: “C is fun”
// The second line: “Python is cool”
// The third line: “JavaScript is amazing”
// You must use console.log(...) to print all output
// You are not allowed to use var
// You are not allowed to use any if/else statement
// You can use only one console.log
// You must use a loop (while, for, etc.)
const languages = ["C is fun", "Python is cool", "JavaScript is amazing"];
for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}
// or using forEach
// languages.forEach(lang => console.log(lang));
// or using a while loop
// let i = 0;
// while (i < languages.length) {
//   console.log(languages[i]);
//   i++;
// }
// or using a do-while loop
// let i = 0;
// do {
//   console.log(languages[i]);
//   i++;
// } while (i < languages.length);
// or using a for...of loop
// for (const lang of languages) {
//   console.log(lang);
// }
// or using a for...in loop
// for (const index in languages) {
//   console.log(languages[index]);
// }
// or using a forEach with an arrow function
// languages.forEach((lang) => console.log(lang));
// or using a forEach with a regular function
// languages.forEach(function(lang) {
//   console.log(lang);
// });
// or using a forEach with an anonymous function
// languages.forEach(function(lang) {
//   console.log(lang);
// });
// or using a forEach with an arrow function and template literals
// languages.forEach(lang => console.log(`${lang}`));
// or using a forEach with a regular function and template literals
// languages.forEach(function(lang) {
//   console.log(`${lang}`);
// });
// or using a forEach with an anonymous function and template literals
// languages.forEach(function(lang) {
//   console.log(`${lang}`);
// });