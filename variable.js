const { execSync } = require('child_process');

// Data types and ECMA
// Define an object
let person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer"
};

// Use console.table to display the object in a table format in the console
console.table(person);

"use strict"; // treat all JS code as newer version
// Define a variable
let name = "John Doe";
console.log(name);

// Define a constant
const PI = 3.14;
console.log(PI);

console.table({name, PI})

//ECMA 6 isn the standard for JavaScript
//ECMA 7 is the latest standard for JavaScript
//ECMA 8 is the latest standard for JavaScript
//ECMA 9 is the latest standard for JavaScript
//ECMA 10 is the latest standard for JavaScript

//null is a standalone value
//undefined is a standalone value
//null is an object
//undefined is an object

//use symbols when we are usnimg uniques

console.log(typeof null);       //object
console.log(typeof undefined);  //undefined
// Import child_process module

// Execute git command to get username
let gitUsername = execSync('git config user.name', { encoding: 'utf8' });
let gitEmail = execSync('git config user.email', { encoding: 'utf8' });
// Log git username
console.log(`Git username is: ${gitUsername}`);
console.log(`Git email is: ${gitEmail}`);


