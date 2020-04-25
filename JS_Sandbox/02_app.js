// Variables - var, let & const

// PRIMITIVE

// String
const name = "John Doe";
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null in console it shows object since its a bug [In JavaScript, typeof null is 'object', which incorrectly suggests that null is an object (it isn't, it's a primitive value, consult my blog post on categorizing values for details). This is a bug and one that unfortunately can't be fixed, because it would break existing code.]
const car = null;

// Undefined
let test;
// Symbol
const sym = Symbol();

// REFERENCE TYPES - Objects
// Array
const hobbies = ["movies", "music"];
// Object literal
const address = {
  city: "Boston",
  state: "MA"
};

const today = new Date();

console.log(today);
console.log(typeof today);
