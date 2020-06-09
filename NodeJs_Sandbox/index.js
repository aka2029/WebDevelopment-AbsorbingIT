/*
console.log("Hello From Node.js...");

// calling person
const person = require("./person");
console.log(person.name);
*/

// calling class Person
const Person = require("./person");
const person1 = new Person("Akash Sharma", 21);
person1.greeting();
