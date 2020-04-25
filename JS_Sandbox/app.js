// Log to console -> The console. log() is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.

console.log("Hello World");
console.log(123);
console.log(true);
var greeting = "Hello";
console.log(greeting);

// Arrays
console.log([1, 2, 3, 4]);

// objects
console.log({ a: 1, b: 2 });

console.table({ a: 1, b: 2 });

console.error("This is some error");

console.clear(); //This clears the console

console.warn("This is a warning");

console.time("Hello"); //Start Time
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.timeEnd("Hello"); //End Time

/* ----------------------------------------------------------------  */

console.clear();

/* There are 3 possible keywords to define a variable -> var, let & const
 We'll only use let & const not var

 -> var declarations are globally scoped or function scoped while let and const are block scoped. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
*/

var name = "Akash Sharma";
console.log(name);
name = "Steve Smith";
console.log(name);
// so you can reassign variables if you use var or let
// you can also create variables but not assign them to a value..... ie Init var
var newVariable;
console.log(newVariable);
newVariable = "Hello";
console.log(newVariable);

// var's can include letters, numbers, _, $ (usually start with letters)
// can not start with number

// Multi word vars
var firstName = "John"; // camel case
var first_name = "Sara"; // underscore
var FirstName = "Tom"; // Pascal case
var firstname;

console.clear();

// LET
let newName = "John Doe";
console.log(newName);
newName = "Steve Smith";
console.log(newName);

// CONST
const nName = "John";
console.log(nName);
// cann't reassign like nName = 'Sara';
// Have to assign a value ie cann't leave like this (const greeting;)

const person = {
  nnName: "John",
  age: 30
};

person.nnName = "Sara"; //we can change data inside object but cann't reassign it
person.age = 32;

// console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // this can be done
// numbers = [1, 2, 3, 4, 5];   This cann't be done
console.log(numbers);

/* ------------------------------------------------------------------ */
